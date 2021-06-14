'use strict';

const mongoose = require('mongoose');
const errorMessages = require('../services/errorMessages');
const AppError = require('../services/error');
const filesHelper = require('../services/filesHelper');
const jwt = require('jsonwebtoken');
const settings = require('./../config');
const mailHelper = require('../services/mailHelper');
const Random = require("random-js").Random;
const request = require('request');
const crypto = require('crypto');


function Client(options) {
  this.core = options.core;
}


Client.prototype.getOffers = function (creator, params) {
  const Offer = mongoose.model('Offer');
  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  const find = Offer.find({status: 'open'}).populate('category').populate('subCategory');
  if (params.country) find.where({country: {$regex: new RegExp(params.country, 'i')}});

  if (params.from && params.to) find.where({
    $or: [
      {
        startDate: {$lte: params.from},
        endDate: {$gte: params.to}
      }, {
        startDate: {$gte: params.from},
        endDate: {$lte: params.to}
      }, {
        $and: [{
          startDate: {$gte: params.from},
          endDate: {$gte: params.to}
        }, {
          startDate: {$lte: params.to}
        }]
      }, {
        $and: [{
          startDate: {$lte: params.from},
          endDate: {$lte: params.to}
        }, {
          endDate: {$gte: params.from}
        }]
      }
    ]
  });
  else if (params.from) find.where({startDate: {$gte: params.from}});
  else if (params.to) find.where({endDate: {$lte: params.to}});

  if (params.last) find.sort('-createdAt').limit(+params.last);
  if (params.type && typeof params.type === 'string') find.where({'type.type': params.type});
  if (params.type && typeof params.type === 'object'&& params.type.length > 0)
    find.where({'type.type': {$in: params.type}});

  if (params.reverse) find.sort('-createdAt');
  if (params.skip) find.skip(params.skip);
  if (params.take) find.limit(params.take);
  if (params.search) return ProgrammerCategories.find({category: {$regex: new RegExp(params.search, 'i')}})
    .then(programmerCategory => {
      find.where({$or: [{name: {$regex: new RegExp(params.search, 'i')}}, {category: programmerCategory}, {subCategory: programmerCategory}]});
      return find
        .exec()
        .catch(err => {
          if (err instanceof AppError) throw err;
          throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
        })
    });
  return find
    .exec()
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Client.prototype.reservation = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  let offer = {}, booking = {};
  let confirmationTime = Date.now();
  const timeTimer = 3600000; // 24h=86400000, 3600000 = 1h
  return Offer.findOne({_id: offerId}).populate('userId').populate('category').populate('subCategory')
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      offer = existOffer;
    })
    .then(() => this.createBooking(creator, params, offerId))
    .then(existBooking => {
      booking = existBooking;
      return this.createCalendar(creator, params, offer, existBooking.id);
    })
    .then(calendar => {
      confirmationTime = new Date(Date.now() + timeTimer); // +24h
      setTimeout(this.checkingTheReadMessage, timeTimer, booking._id);
      console.log('start timer');
      return calendar;
    })
    .then(calendar => {
      return new Promise((resolve, reject) => {
        const subject = 'Booking confirmation';
        console.log('offer', offer)
        const data = {
          confirmationTime: confirmationTime,
          userPhotoURL: `${settings.appURL}/uploads/${creator.profilePhotoURL}`,
          userFullname: creator.firstName + ' ' + creator.lastName,
          offerPhotoURL: `${settings.appURL}/uploads/${offer.avatarUrl}`,
          category: offer.category.category,
          offerName: offer.name,
          date: params.startDate.slice(0, 10),
          time: params.startDate.slice(11, 19),
          includes: '',
          pticeLeft: `${offer.currency} ${offer.pricePerAct} x ${calendar.length} days`,
          pticeRight: `${offer.currency} ${offer.pricePerAct * calendar.length}`,
          location: booking.location || '',
          locationDetails: booking.locationDetails || '',
          additional: booking.additionalTerms || '',
          appURL: settings.appURL,
          bookingLink: `${settings.appURL}/inbox/${booking.id}/booking`,
        };

        const html = require('./../services/mailTemplates').newRequest(data);

        mailHelper.send(offer.userId.email, subject, 'TEXT', html, (err, info) => {
          if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
          resolve(calendar);
        });
      });
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.createCalendar = function (creator, params, offer, bookingId) {
  const Calendar = mongoose.model('Calendar');
  return Calendar
    .find({
      offerId: offer.id,
      date: {
        $gte: params.startDate,
        $lte: params.endDate
      },
      status: 'disabled'
    })
    .then(calendars => {
      const disabledDays = calendars.map(calendar => new Date(calendar.date));

      let startDate = new Date(params.startDate), endDate = new Date(params.endDate);
      let chain = Promise.resolve();
      let result = [];
      for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
        const date = new Date(i);
        if (!disabledDays.some(day => day.getTime() === date.getTime()))
          chain = chain
            .then(() => Calendar.create({
              status: 'reserved',
              clientId: creator.id,
              bookingId: bookingId,
              offerId: offer.id,
              date: date,
              pricePerDay: offer.pricePerAct
            }))
            .then(createdCalendar => {
              result.push(createdCalendar);
              return createdCalendar;
            });
      }
      return chain.then(res => result)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.createInvoice = function (creator, params, bookingId) {
  const Booking = mongoose.model('Booking');
  const Calendar = mongoose.model('Calendar');
  const Invoice = mongoose.model('Invoice');
  let pricePerAct = 0;
  let price = 0;
  let currency = '';
  let discountsOffer = [];
  let discount = 0; // 0%
  return Booking
    .findOne({
      _id: bookingId,
      clientId: creator.id
    })
    .populate('offerSnapshotId')
    .then(existBooking => {
      if (!existBooking) throw new AppError({status: 400, message: errorMessages.BOOKING_NOT_FOUND});
      pricePerAct = existBooking.offerSnapshotId.pricePerAct;
      currency = existBooking.offerSnapshotId.currency;
      discountsOffer = existBooking.offerSnapshotId.discounts;
      return Calendar.find({
        bookingId: bookingId,
        clientId: creator.id,
        status: 'reserved'
      })
    })
    .then(calendars => {
      let countReservedDays = calendars.length;
      calendars.forEach(calendar => {
        price += calendar.pricePerDay;
      });
      if (discountsOffer) {
        for (let i = 0; i < discountsOffer.length; i++) {
          if (countReservedDays >= discountsOffer[i].numberDays && discount < discountsOffer[i].discount)
            discount = discountsOffer[i].discount;
        }
      }
      let paymentAmount = price - (price * discount) / 100; // 100-(100-10%) = 90
      return Invoice.create({
        clientId: creator.id,
        bookingId: bookingId,
        currency: currency,
        paymentAmount: paymentAmount,
        countReservedDays: countReservedDays,
        pricePerAct: pricePerAct
      })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.getInvoices = function (creator) {
  const Invoice = mongoose.model('Invoice');
  return Invoice
    .find({clientId: creator.id}).exec()
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.createBooking = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  const OfferPhoto = mongoose.model('OfferPhoto');
  const OfferDetails = mongoose.model('OfferDetails');

  const offerSnapshot = mongoose.model('OfferSnapshot');
  const CalendarSnapshot = mongoose.model('CalendarSnapshot');
  const OfferPhotoSnapshot = mongoose.model('OfferPhotoSnapshot');
  const OfferDetailsSnapshot = mongoose.model('OfferDetailsSnapshot');

  const Booking = mongoose.model('Booking');
  let avatarUrl = '';
  let chain = Promise.resolve();
  let oldOffer = {};
  let newOffer = {};

  return Offer.findOne({
    _id: offerId
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return existOffer;
    })
    .then(existOffer => {
      return Calendar.find({
        offerId: existOffer.id
      })
        .then(calendars => {
          oldOffer = existOffer.toJSON();
          oldOffer.calendar = calendars;
          return oldOffer;
        })
        .then(a => {
          return OfferPhoto.find({offerId: existOffer.id})
            .then(existOfferPhoto => {
              oldOffer.offerPhoto = existOfferPhoto;
              return oldOffer;
            })
        })
        .then(a => {
          return OfferDetails.find({offerId: existOffer.id})
            .then(existOfferDetails => {
              oldOffer.offerDetails = existOfferDetails;
              return oldOffer;
            });
        })

    })
    .then(existOffer => {
      return offerSnapshot.create({
        userId: existOffer.userId,
        category: existOffer.category,
        subCategory: existOffer.subCategory,
        earnings: existOffer.earnings,
        country: existOffer.country,
        state: existOffer.state,
        city: existOffer.city,
        address: existOffer.address,
        name: existOffer.name + ' (copy)',
        summary: existOffer.summary,
        numberOfPeople: existOffer.numberOfPeople,
        description: existOffer.description,
        type: existOffer.type,
        regulations: existOffer.regulations,
        details: existOffer.details,
        minNumberOfActs: existOffer.minNumberOfActs,
        maxNumberOfActs: existOffer.maxNumberOfActs,
        daysBeforeBooking: existOffer.daysBeforeBooking,
        timeOpenCalendar: existOffer.timeOpenCalendar,
        discounts: existOffer.discounts,
        avatarUrl: existOffer.avatarUrl,
        status: 'unpublished',
        startDate: existOffer.startDate,
        endDate: existOffer.endDate,
        createdAt: Date.now(),
        categoryOptions: existOffer.categoryOptions,
        pricePerAct: existOffer.pricePerAct,
        currency: existOffer.currency,
        typePrice: existOffer.typePrice,
        kickstart: existOffer.kickstart,
        step: existOffer.step,
        videoUrl: existOffer.videoUrl,
        descriptionWillDone: existOffer.descriptionWillDone,
        descriptionWillProvide: existOffer.descriptionWillProvide,
        descriptionRequirements: existOffer.descriptionRequirements,
        descriptionNote: existOffer.descriptionNote,
      })
    })
    .then(createdSnapshotOffer => {
      avatarUrl = createdSnapshotOffer.avatarUrl;
      newOffer = createdSnapshotOffer.toJSON();
      let chain = Promise.resolve();
      newOffer.calendar = [];
      if (oldOffer.calendar) {
        oldOffer.calendar.forEach((calendar) => {
          chain = chain
            .then(res => {
              return Calendar.create({
                offerId: newOffer.id,
                bookingId: calendar.bookingId,
                clientId: calendar.clientId,
                date: calendar.date,
                status: 'disabled',
              })
                .then(calendar => newOffer.calendar.push(calendar.toJSON()))
            })
        });
        return chain.then(res => createdSnapshotOffer)
      }
      return createdSnapshotOffer;
    })
    .then(createdSnapshotOffer => {
      avatarUrl = createdSnapshotOffer.avatarUrl;
      let chain = Promise.resolve();
      if (oldOffer.offerPhoto) {
        newOffer.offerPhoto = [];
        oldOffer.offerPhoto.forEach((offerPhoto) => {
          chain = chain
            .then(res => filesHelper.copyPhoto(offerPhoto.photoUrl, 'offerPhoto'))
            .then(newPhotoUrl => {
              return OfferPhoto
                .create({
                  offerId: newOffer.id,
                  photoUrl: newPhotoUrl,
                  description: offerPhoto.description
                })
                .then(newOfferPhoto => {
                  if (avatarUrl === offerPhoto.photoUrl) {
                    createdSnapshotOffer.set('avatarUrl', newOfferPhoto.photoUrl);
                    createdSnapshotOffer.save();
                    newOffer.avatarUrl = newOfferPhoto.photoUrl;
                  }
                  newOffer.offerPhoto.push(newOfferPhoto.toJSON())
                })
            })
        });
        return chain.then(res => createdSnapshotOffer)
      }

      return chain.then(res => createdSnapshotOffer)
    })
    .then(createdSnapshotOffer => {
      let chain = Promise.resolve();
      newOffer.OfferDetails = [];
      if (oldOffer.OfferDetails) {
        oldOffer.OfferDetails.forEach((offerDetail) => {
          chain = chain
            .then(res => {
              return OfferDetails.create({
                offerId: newOffer.id,
                description: offerDetail.description,
                earnings: offerDetail.earnings
              })
                .then(offerDetail => newOffer.OfferDetails.push(offerDetail)
                )
            })
        });
        return chain.then(res => createdSnapshotOffer)
      }
      return createdSnapshotOffer;
    })
    .then(createdSnapshotOffer => newOffer)
    .then(newOffer => {
      return Booking.create({
        clientId: creator.id,
        offerCreatorId: newOffer.userId,
        offerId: offerId,
        offerSnapshotId: newOffer.id,
        startDate: params.startDate,
        endDate: params.endDate,
        location: params.location,
        locationDetails: params.locationDetails,
        startTime: params.startTime,
        additionalTerms: params.additionalTerms
      })
    })
    .then(booking => {
      this.core.chat.sendSystemMessage('Some start system message text', booking.id);
      return booking;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.payment = function (creator, params, invoiceId, ip) {
  const Invoice = mongoose.model('Invoice');
  return Invoice.findOne({
    _id: invoiceId,
    clientId: creator.id
  })
    .then(existInvoice => {
      if (!existInvoice) throw new AppError({status: 400, message: errorMessages.INVOICE_NOT_FOUND});
      let now = new Date().toISOString().split('.')[0].split('T').join(' ');//.format('YYYY-MM-DD HH:MM:SS')
      let vendorCode = '250228241951';
      let toHash = vendorCode.length + vendorCode + now.length + now;
      let salt = 'lre5BE8JDoAOcf03_7!~';
      const hmac = crypto.createHmac('md5', salt);
      console.log('toHash', toHash);
      hmac.update(toHash);
      const hash = hmac.digest('hex');
      console.log('hash', hash);
      console.log("code='" + vendorCode + "' date='" + now + "' hash='" + hash + "'");
      if (ip === '::1') ip = '127.0.0.1';

      const body = {
        'Currency': existInvoice.currency, //'usd',
        'Language': params.language, //'en',
        'Country': params.country, //'us',
        'CustomerIP': ip, //'91.220.121.21',
        'Source': 'programmerbooking.net/', //'testAPI.com',
        'ExternalReference': 'REST_API_AVANGTE',
        'Items': [
          {
            'IsDynamic': true,
            'Quantity': '1',
            'PurchaseType': 'COUPON',//PRODUCT, TAX, COUPON, SHIPPING
            'Price': {
              'Amount': existInvoice.paymentAmount, //'0'
            },
            'Name': 'programmer' // COUPON item
          },
        ],
        'BillingDetails': {
          'Address1': params.address, //'Test Address',
          'City': params.city, //'LA',
          'State': params.state, //'California',
          'CountryCode': params.countryCode, //'US',
          'Email': creator.email, //'testcustomer@2Checkout.com',
          'FirstName': params.firstName, //'Customer',
          'LastName': params.lastName, //'2Checkout',
          'Zip': 'ZIP'
        },
        'PaymentDetails': {
          'Type': params.type, //'TEST', 'CC'
          'Currency': existInvoice.currency, //'usd',
          'CustomerIP': ip, //'91.220.121.21',
          'PaymentMethod': {
            'CardNumber': params.cardNumber, //'4111111111111111',
            'CardType': params.cardType, //'VISA', visa, visaelectron, mastercard, maestro, amex, discover, dankort, cartebleue, jcb,
            'ExpirationYear': params.expirationYear, //'2020',
            'ExpirationMonth': params.expirationMonth, //'12',
            'CCID': params.ccid, //'123',
            'HolderName': params.firstName + ' ' + params.lastName, //'John Doe',
            'RecurringEnabled': true,
            'HolderNameTime': params.holderNameTime, //'12',
            'CardNumberTime': params.cardNumberTime, //'12',
            'Vendor3DSReturnURL': 'http://myreturnurl.com',
            'Vendor3DSCancelURL': 'http://cancelurl.com'
          }
        }
      };

      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          url: 'https://api.2checkout.com/rest/5.0/orders/',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Avangate-Authentication': "code='" + vendorCode + "' date='" + now + "' hash='" + hash + "'"
          },
          body: JSON.stringify(body)
        }, function (error, response2checkout, body) {
          if (error) {
            console.error('resp err: ', error);
            let response = existInvoice.toJSON();
            response['2checkout'] = error;
            resolve(response);
          }
          console.log('Status:', response2checkout.statusCode);
          console.log('Headers:', JSON.stringify(response2checkout.headers));
          console.log('Response:', body);
          if (response2checkout.statusCode !== 201) {
            let response = existInvoice.toJSON();
            response['2checkout'] = response2checkout;
            resolve(response);
          }
          existInvoice.set('dateOfPayment', Date.now());
          existInvoice.set('status', 'paid');
          existInvoice.save();
          let response = existInvoice.toJSON();
          response['2checkout'] = response2checkout;
          resolve(response);
        });
      })

    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.getOrder = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: offerId
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.EVENT_NOT_FOUND});

      let now = new Date().toISOString().split('.')[0].split('T').join(' ');//.format('YYYY-MM-DD HH:MM:SS')
      let vendorCode = '250228241951';
      let toHash = vendorCode.length + vendorCode + now.length + now;
      let salt = 'lre5BE8JDoAOcf03_7!~';
      const hmac = crypto.createHmac('md5', salt);

      console.log('toHash', toHash);
      hmac.update(toHash);
      const hash = hmac.digest('hex');
      console.log('hash', hash);

      request({
        method: 'GET',
        url: 'https://api.2checkout.com/rest/5.0/orders/108172521/',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Avangate-Authentication': "code='" + vendorCode + "' date='" + now + "' hash='" + hash + "'"
        }
      }, function (error, response, body) {
        if (error) return console.error('resp err: ', error);
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
      });

    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.createReview = function (creator, params, bookingId) {
  const Booking = mongoose.model('Booking');
  const Review = mongoose.model('Review');
  return Booking
    .findOne({
      _id: bookingId,
      clientId: creator.id,
    })
    .then(existBooking => {
      if (!existBooking) throw new AppError({status: 400, message: errorMessages.BOOKING_NOT_FOUND});
      if (!params.text) throw new AppError({status: 400, message: errorMessages.BAD_DATA});
      return Review.create({
        text: params.text,
        userId: creator.id,
        offerId: existBooking.offerId,
        bookingId: bookingId,
      })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

Client.prototype.createRating = function (creator, params, bookingId) {
  const Offer = mongoose.model('Offer');
  const Booking = mongoose.model('Booking');
  const Rating = mongoose.model('Rating');
  let offerId = '';
  return Booking
    .findOne({
      _id: bookingId,
      clientId: creator.id,
    })
    .then(existBooking => {
      if (!existBooking) throw new AppError({status: 400, message: errorMessages.BOOKING_NOT_FOUND});
      if (!params.rating) throw new AppError({status: 400, message: errorMessages.BAD_DATA});
      offerId = existBooking.offerId;
      return Rating.findOne({
        userId: creator.id,
        offerId: existBooking.offerId,
      })
    })
    .then(existRating => {
      if (existRating) {
        existRating.set('rating', params.rating);
        return existRating.save();
      }
      return Rating.create({
        rating: params.rating,
        userId: creator.id,
        offerId: offerId,
        bookingId: bookingId,
      })
    })
    .then(existRating => Offer.findOne({_id: existRating.offerId}))
    .then(existOffer => {
      return Rating.find({offerId: existOffer.id})
        .then(ratings => {
          let newRatingOffer = 0;
          let sumRating = 0;
          ratings.forEach(rating => sumRating += rating.rating);
          newRatingOffer = sumRating / ratings.length;
          existOffer.set('rating', newRatingOffer);
          return existOffer.save();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};


Client.prototype.checkingTheReadMessage = function (bookingId) {
  const Booking = mongoose.model('Booking');
  return Booking.findOne({_id: bookingId, status: 'pending'})
    .then(existBooking => {
      if (!existBooking) return;
      console.log('expired booking');
      existBooking.set('status', 'expired');
      existBooking.save();
      return existBooking;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    });
};

// Client.prototype.update = function (creator, params, offerId) {
//   const Calendar = mongoose.model('Calendar');
//   let chain = Promise.resolve();
//   let result = [];
//   return Calendar.find({status: 'reserved'}).populate({path: 'bookingId', populate: {path: 'offerSnapshotId'}})
//     .then(existCalendars => {
//       existCalendars.forEach(calendar => {
//         chain = chain
//           .then(res => {
//             calendar.set('pricePerDay', calendar.bookingId.offerSnapshotId.pricePerAct);
//             calendar.save();
//             result.push(calendar);
//           })
//       });
//       return chain.then(res => result)
//     })
//     .catch(err => {
//       if (err instanceof AppError) throw err;
//       throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
//     });
// };

module.exports = Client;
