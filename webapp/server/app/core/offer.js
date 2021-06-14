'use strict';

const mongoose = require('mongoose');
const errorMessages = require('../services/errorMessages');
const AppError = require('../services/error');
const filesHelper = require('../services/filesHelper');
const jwt = require('jsonwebtoken');
const settings = require('./../config');
const mailHelper = require('../services/mailHelper');

//функция Конструктор "класса"
function Offer(options) {
  this.core = options.core;
}

//передаем св-ву prototype объект с методами
Offer.prototype.createOffer = function (creator, params) {
  const Offer = mongoose.model('Offer');
  return Offer.create({
    userId: creator.id,
    programmerId: params.programmerId,
    organiserId: params.organiserId,
    category: params.category,
    subCategory: params.subCategory,
    earnings: params.earnings,
    country: params.country,
    state: params.state,
    city: params.city,
    address: params.address,
    name: params.name,
    summary: params.summary,
    description: params.description,
    type: params.type,
    numberOfPeople: params.numberOfPeople,
    descriptionWillDone: params.descriptionWillDone,
    descriptionWillProvide: params.descriptionWillProvide,
    descriptionRequirements: params.descriptionRequirements,
    descriptionNote: params.descriptionNote
  })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.updateOffer = function (creator, id, params) {
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: id,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});

      console.log('params', params);

      if (params.name) existOffer.set('name', params.name);
      if (params.summary) existOffer.set('summary', params.summary);
      if (params.description) existOffer.set('description', params.description);
      if (params.type) existOffer.set('type', params.type);
      if (params.category) existOffer.set('category', params.category);
      if (params.subCategory) existOffer.set('subCategory', params.subCategory);
      if (params.earnings) existOffer.set('earnings', params.earnings);
      if (params.country) existOffer.set('country', params.country);
      if (params.state) existOffer.set('state', params.state);
      if (params.city) existOffer.set('city', params.city);
      if (params.address) existOffer.set('address', params.address);
      if (params.status === 'open' || params.status === 'unpublished') existOffer.set('status', params.status);
      if (params.step) existOffer.set('step', params.step);
      if (params.videoUrl) existOffer.set('videoUrl', params.videoUrl);
      if (params.descriptionWillDone) existOffer.set('descriptionWillDone', params.descriptionWillDone);
      if (params.descriptionWillProvide) existOffer.set('descriptionWillProvide', params.descriptionWillProvide);
      if (params.descriptionRequirements) existOffer.set('descriptionRequirements', params.descriptionRequirements);
      if (params.descriptionNote) existOffer.set('descriptionNote', params.descriptionNote);

      return existOffer.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.deleteOffer = function (creator, id, params) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  const OfferPhoto = mongoose.model('OfferPhoto');
  const OfferDetails = mongoose.model('OfferDetails');
  return Offer.findOne({
    _id: id,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return existOffer.id;
    })
    .then(deleteOfferId => {
      return Calendar.remove({
        offerId: deleteOfferId
      })
        .then(deleted => deleteOfferId)
    })
    .then(deleteOfferId => {
      return OfferPhoto.remove({
        offerId: deleteOfferId
      })
        .then(deleted => deleteOfferId)
    })
    .then(deleteOfferId => {
      return OfferDetails.remove({
        offerId: deleteOfferId
      })
        .then(deleted => deleteOfferId)
    })
    .then(deleteOfferId => {
      return Offer.remove({
        _id: deleteOfferId
      })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getOffer = function (creator, id) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  const OfferPhoto = mongoose.model('OfferPhoto');
  const OfferDetails = mongoose.model('OfferDetails');
  const Event = mongoose.model('Event');
  const PreChat = mongoose.model('PreChat');
  const OfferParticipants = mongoose.model('OfferParticipants');
  const Like = mongoose.model('Like');
  const Review = mongoose.model('Review');

  console.log('-creator', creator)

  let newOffer = {};
  return Offer.findOne({
    _id: id,
    // userId: creator.id
  })
    .populate({path: 'categoryOptions', populate: {path: 'templateId'}})
    .populate('category')
    .populate('subCategory')
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Calendar.find({
        offerId: existOffer.id
      })
        .then(calendars => {
          newOffer = existOffer.toJSON();
          newOffer.calendar = calendars;
          return newOffer;
        })
        .then(a => {
          return OfferPhoto.find({offerId: existOffer.id})
            .then(existOfferPhoto => {
              newOffer.offerPhoto = existOfferPhoto;
              return newOffer;
            })
        })
        .then(a => {
          return Event.find({offerId: existOffer.id})
            .then(existEvent => {
              newOffer.event = existEvent;
              return newOffer;
            });
        })
        .then(a => {
          return OfferParticipants.find({
            offerId: existOffer.id,
            confirm: true
          })
            .populate('userId')
            .then(existOfferParticipants => {
              newOffer.offerParticipants = existOfferParticipants;
              return newOffer;
            });
        })
        .then(a => {
          return OfferDetails.find({offerId: existOffer.id})
            .then(existOfferDetails => {
              newOffer.offerDetails = existOfferDetails;
              return newOffer;
            });
        })
        .then(a => {

          console.log('creator', creator)


          if (!creator) return newOffer;


          return PreChat.findOne({offerId: existOffer.id, clientId: creator.id})
            .then(existPreChat => {
              if (existPreChat) newOffer.preChatId = existPreChat._id;
              return newOffer;
            });
        })

    })
    .then(existOffer => {
      let result = existOffer;
      if (!creator) return result;
      return Like.findOne({offerId: id, userId: creator.id})
        .then(existLike => {
          if (!existLike) {
            result.myLike = false;
            return result;
          }
          result.myLike = true;
          return result;
        })
    })
    .then(existOffer => {
      let result = existOffer;
      return Review.find({offerId: existOffer.id}).populate('userId')
        .then(reviews => {
          result.reviews = reviews;
          return result;
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getAllOffers = function () {
  const Offer = mongoose.model('Offer');
  const Event = mongoose.model('Event');
  const Calendar = mongoose.model('Calendar');
  const OfferDetails = mongoose.model('OfferDetails');
  const OfferPhoto = mongoose.model('OfferPhoto');
  let chain = Promise.resolve();
  return Offer.find({})
    .populate('eventId')
    .then(existOffers => {
      if (!existOffers) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return existOffers;
    })
    .then(existOffers => {
      let newOffers = [];
      existOffers.forEach(existOffer => {
        chain = chain
          .then(res => {
            existOffer = existOffer.toJSON();
            return Calendar.find({offerId: existOffer.id})
              .then(existCalendar => {
                existOffer.calendar = existCalendar;
              })
              .then(a => {
                return Event.find({offerId: existOffer.id})
                  .then(existEvent => {
                    existOffer.event = existEvent;
                  });
              })
              .then(a => {
                return OfferDetails.find({offerId: existOffer.id})
                  .then(existOfferDetails => {
                    existOffer.offerDetails = existOfferDetails;
                  });
              })
              .then(a => {
                return OfferPhoto.find({offerId: existOffer.id})
                  .then(existOfferPhoto => {
                    existOffer.offerPhoto = existOfferPhoto;
                    newOffers.push(existOffer);
                  });
              });
          });
      });
      return chain.then(res => newOffers)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getOffers = function (creator) {
  const Offer = mongoose.model('Offer');
  return Offer.find({
    userId: creator.id
  })
    .populate('category')
    .populate('subCategory')
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getPopularCategories = async function () {
  try {
    const ProgrammerCategories = mongoose.model('ProgrammerCategories');
    const Offer = mongoose.model('Offer');
    let categories = await ProgrammerCategories.find();
    const countPopularOffers = 6;
    let offers = [];
    let result = [];
    for (let i = 0; i < categories.length; i++) {
      result[i] = {};
      result[i].categories = categories[i];
      result[i].offers = [];
      let offers = await Offer.find({
          status: 'open',
          category: categories[i]._id
        }
      );
      if (offers.length !== 0) {
        for (let j = 0; j < offers.length; j++) {
          result[i].offers.push(offers[j]);
        }
      }
      result[i].countOffers = offers.length
    }
    result.sort((a, b) => b.countOffers - a.countOffers);
    result = result.slice(0, countPopularOffers);

    for (let i = 0; i < result.length; i++) {
      result[i].offers.sort((a, b) => a.createdAt - b.createdAt);
      result[i].offers = result[i].offers.slice(0, countPopularOffers);
    }

    return result;
  }
  catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
  }
};

function createTestCategories() {
  const FrontCategoriesTemplate = mongoose.model('FrontCategoriesTemplate');
  FrontCategoriesTemplate.findOne({
    category: 'Actor'
  }).exec().then((category) => {
    if (!category) {
      FrontCategoriesTemplate.create({
        category: 'Actor',
        title: 'Preferred size',
        type: 'input',
        description: 'lorem ipsum',
        required: true,
        step: 1,
        index: 1,
        defaultValue: '',
        possibleValues: []
      })
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Ideal for which audience?',
          type: 'input',
          description: 'lorem ipsum',
          required: true,
          step: 1,
          index: 1,
          defaultValue: '',
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Length of performance',
          type: 'input',
          description: 'lorem ipsum',
          required: true,
          step: 1,
          index: 1,
          defaultValue: '',
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Number of sets / actions',
          type: 'input',
          description: 'lorem ipsum',
          required: true,
          step: 1,
          index: 1,
          defaultValue: '',
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Breaks between sets',
          type: 'input',
          description: 'lorem ipsum',
          required: true,
          step: 1,
          index: 1,
          defaultValue: '',
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Electrical connection ',
          type: 'int',
          description: 'lorem ipsum',
          required: true,
          step: 2,
          index: 2,
          defaultValue: 0,
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'The minimum size of the area ',
          type: 'int',
          description: 'lorem ipsum',
          required: true,
          step: 2,
          index: 2,
          defaultValue: 0,
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Maximum number of performances per day',
          type: 'int',
          description: 'lorem ipsum',
          required: true,
          step: 2,
          index: 2,
          defaultValue: 0,
          possibleValues: []
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Food / Water / Napkins',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 3,
          index: 3,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Dressing room / dressing room',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 3,
          index: 3,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'indoor / outdoor playground',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 3,
          index: 3,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Ability to travel abroad',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 3,
          index: 3,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Microphone',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 3,
          index: 3,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Security person',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 3,
          index: 3,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Using fire',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Loud music',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Scarry for kids',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: '21+',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Family friendly',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Educational',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))
        .then(() => FrontCategoriesTemplate.create({
          category: 'Actor',
          title: 'Extremely',
          type: 'bool',
          description: 'lorem ipsum',
          required: true,
          step: 4,
          index: 4,
          defaultValue: false,
          possibleValues: [true, false]
        }))

        .then(() => console.log('test FrontCategoriesTemplate created'))
    }
  })
}

//setTimeout(() => createTestCategories(), 1000); //todo delete

Offer.prototype.categoryOptions = function (creator, offerId, params) {
  const OfferCategoriesData = mongoose.model('OfferCategoriesData');
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .populate({path: 'categoryOptions', populate: {path: 'templateId'}})
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});

      return OfferCategoriesData.deleteMany({
        offerId: offerId
      })
        .then(() => {
          let offerCategoriesDataIds = [];
          let chain = Promise.resolve();
          params.forEach((categoryOption) => {
            chain = chain
              .then(() => OfferCategoriesData.create({
                offerId: offerId,
                templateId: categoryOption.templateId,
                value: categoryOption.value
              }))
              .then(offerCategoriesData => {
                offerCategoriesDataIds.push(offerCategoriesData._id)
              })
              .catch(err => {
                if (err instanceof AppError) throw err;
                throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
              })
          });

          return chain.then(() => {
            existOffer.categoryOptions = offerCategoriesDataIds;
            return existOffer.save()
          });
        })
        .then(() => Offer.findOne({
          _id: offerId,
          userId: creator.id
        })
          .populate({path: 'categoryOptions', populate: {path: 'templateId'}}))
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.createOfferDetails = function (creator, params, files) {
  const OfferDetails = mongoose.model('OfferDetails');
  const OfferPhoto = mongoose.model('OfferPhoto');
  const Offer = mongoose.model('Offer');
  return Offer
    .findOne({
      _id: params.offerId,
      userId: creator.id
    })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      let photoUrlArray = [];
      let chain = Promise.resolve();
      let result = {};
      files.forEach((file) => {
        chain = chain
          .then(res => filesHelper.savePhoto(file, 'offerPhoto'))
          .then(file => {
            photoUrlArray.push(file.path);
            OfferPhoto.create({
              offerId: params.offerId,
              photoUrl: file.path
            })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          })
      });
      return chain
        .then(res => OfferDetails
          .create({
            offerId: params.offerId,
            description: params.description,
            videoUrl: params.videoUrl,
            earnings: params.earnings,
          })
          .then(offerDetails => {
            let result = {};
            result.details = offerDetails;
            result.photo = photoUrlArray;
            return result;
          })
        )
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getOfferDetails = function (creator, offerId) {
  const OfferDetails = mongoose.model('OfferDetails');
  const Offer = mongoose.model('Offer');
  return Offer
    .findOne({
      _id: offerId,
      userId: creator.id
    })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return OfferDetails.find({
        offerId: offerId
      })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.addPhotos = function (creator, params, files) {
  const OfferDetails = mongoose.model('OfferDetails');
  const OfferPhoto = mongoose.model('OfferPhoto');
  const Offer = mongoose.model('Offer');
  return Offer
    .findOne({
      _id: params.offerId,
      userId: creator.id
    })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      let newPhotoUrlArray = [];
      let chain = Promise.resolve();
      let response = [];
      files.forEach((file) => {
        chain = chain
          .then(res => filesHelper.savePhoto(file, 'offerPhoto'))
          .then(file => {
            newPhotoUrlArray.push(file.path);
            return OfferPhoto
              .create({
                offerId: params.offerId,
                photoUrl: file.path
              })
              .then(offerPhoto => response.push(offerPhoto))
          })
      });
      return chain.then(res => response)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getPhotos = function (creator, params) {
  const Offer = mongoose.model('Offer');
  const OfferPhoto = mongoose.model('OfferPhoto');
  return Offer
    .findOne({
      _id: params.offerId,
      userId: creator.id
    })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return OfferPhoto.find({
        offerId: params.offerId
      })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.deletePhoto = function (creator, offerPhotoId) {
  const OfferPhoto = mongoose.model('OfferPhoto');
  return OfferPhoto.findOne({
    _id: offerPhotoId
  })
    .then(existOfferPhoto => {
      if (!existOfferPhoto) throw new AppError({status: 400, message: errorMessages.OFFER_PHOTO_NOT_FOUND});
      return existOfferPhoto.remove();
    })
    .then(deletedOfferPhoto => filesHelper.deletePhoto(deletedOfferPhoto.photoUrl))
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.updatePhoto = function (creator, params, offerPhotoId) {
  const OfferPhoto = mongoose.model('OfferPhoto');
  return OfferPhoto.findOne({
    _id: offerPhotoId
  })
    .then(existOfferPhoto => {
      if (!existOfferPhoto) throw new AppError({status: 400, message: errorMessages.OFFER_PHOTO_NOT_FOUND});
      existOfferPhoto.set('description', params.description);
      return existOfferPhoto.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.updateAvatar = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  const OfferPhoto = mongoose.model('OfferPhoto');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      console.log('creator.id', creator.id)
      return OfferPhoto.findOne({
        _id: params.offerPhotoId
      })
        .then(existOfferPhoto => {
          if (!existOfferPhoto) throw new AppError({status: 400, message: errorMessages.OFFER_PHOTO_NOT_FOUND});
          console.log('existOfferPhoto.photoUrl', existOfferPhoto)
          existOffer.set('avatarUrl', existOfferPhoto.photoUrl);
          return existOffer.save();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.addRegulations = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      existOffer.set('regulations', params.regulations);
      existOffer.set('details', params.details);
      return existOffer.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.addPerformanceDetails = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      existOffer.set('maxNumberOfActs', params.maxNumberOfActs);
      existOffer.set('minNumberOfActs', params.minNumberOfActs);
      existOffer.set('daysBeforeBooking', params.daysBeforeBooking);
      existOffer.set('timeOpenCalendar', params.timeOpenCalendar);
      existOffer.set('startDate', params.startDate);
      existOffer.set('endDate', params.endDate);
      return existOffer.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.addCalendar = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      let chain = Promise.resolve();
      let response = [];
      params.disabledTimes.forEach((disabledTime) => {
        chain = chain
          .then(res => {
            return Calendar.create({
              offerId: offerId,
              date: disabledTime,
              status: 'disabled'
            })
              .then(calendar => {
                response.push(calendar);
              })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          })
      });
      return chain.then(res => response)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.disabledDays = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Calendar.deleteMany({
        offerId: offerId,
        status: 'disabled'
      })
    })
    .then(a => {
      let chain = Promise.resolve();
      let response = [];
      params.disabledTimes.forEach((disabledTime) => {
        chain = chain
          .then(res => {
            return Calendar.create({
              offerId: offerId,
              date: disabledTime,
              status: 'disabled'
            })
              .then(calendar => {
                response.push(calendar);
              })
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          })
      });
      return chain.then(res => response)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.getCalendar = function (creator, offerId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Calendar
        .find({offerId: offerId})
        .then(existOffer => {
          if (!existOffer) throw new AppError({status: 400, message: errorMessages.CALENDAR_NOT_FOUND});
          return existOffer;
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.updateCalendar = function (creator, params, offerId, calendarId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Calendar
        .findOne({
          offerId: offerId,
          _id: calendarId
        })
        .then(existCalendar => {
          if (!existCalendar) throw new AppError({status: 400, message: errorMessages.CALENDAR_NOT_FOUND});
          existCalendar.set('availableTime.startDate', params.startDate);
          existCalendar.set('availableTime.endDate', params.endDate);
          return existCalendar.save();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.deleteCalendar = function (creator, offerId, calendarId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Calendar
        .remove({
          offerId: offerId,
          _id: calendarId
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.addPrice = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      existOffer.set('typePrice', params.typePrice);
      existOffer.set('pricePerAct', params.pricePerAct);
      existOffer.set('currency', params.currency);
      existOffer.set('kickstart', params.kickstart);
      return existOffer.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.addDiscounts = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  return Offer.findOne({
    _id: offerId
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.EVENT_NOT_FOUND});
      existOffer.set('discounts', params.discounts);
      return existOffer.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.inviteParticipants = function (creator, params, offerId) {
  const Offer = mongoose.model('Offer');
  const OfferParticipants = mongoose.model('OfferParticipants');
  let result = [];
  let chain = Promise.resolve();
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  }).populate('userId')
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      if (!params.emails) throw new AppError({status: 400, message: errorMessages.BAD_DATA});
      params.emails.forEach(email => {
        chain = chain
          .then(res => {
            return OfferParticipants.create({
              offerId: existOffer.id,
              email: email,
            })
              .then(offerParticipants => {
                result.push(offerParticipants);
                return new Promise((resolve, reject) => {
                  const subject = 'Booking confirmation';
                  const data = {
                    appURL: settings.appURL,
                    offerParticipantsId: offerParticipants.id,
                    offerOwnerFullname: existOffer.userId.firstName + ' ' + existOffer.userId.lastName,
                    offerOwnerPhotoURL: settings.appURL + '/uploads/' + existOffer.userId.profilePhotoURL,
                    offerId: existOffer.id,
                    offerName: existOffer.name
                  };

                  const html = require('./../services/mailTemplates').inviteParticipants(data)

                  setTimeout(() => {
                    mailHelper.send(offerParticipants.email, subject, 'TEXT', html, (err, info) => {
                      console.log('Date', new Date());
                      if (err) return reject(new AppError({
                        status: 500,
                        message: errorMessages.SERVER_ERROR,
                        err: err
                      }));
                      resolve(info);
                    });
                  }, 5000);


                });
              })
          });
      });
      return chain.then(res => result)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.approve = function (creator, params, offerId) {
  const Booking = mongoose.model('Booking');
  const Calendar = mongoose.model('Calendar');
  let booking = {};
  return Booking.findOne({
    _id: params.bookingId,
    offerCreatorId: creator.id,
    offerId: offerId,
    status: 'pending'
  }).populate('clientId')
    .populate({path: 'offerId', populate: {path: 'category'}})
    .populate({path: 'offerId', populate: {path: 'subCategory'}})
    .then(existBooking => {
      if (!existBooking) throw new AppError({status: 400, message: errorMessages.BOOKING_NOT_FOUND});
      booking = existBooking;
      existBooking.set('status', 'approve');
      return existBooking.save();
    })
    .then(booking => Calendar.updateMany({bookingId: booking.id}, {$set: {status: 'disabled',}}))
    .then(() => this.core.chat.sendSystemMessage('Request has been Approved', params.bookingId))
    .then(() => {
      return new Promise((resolve, reject) => {
        const subject = 'Request has been Approved';
        const data = {
          offerPhotoURL: `${settings.appURL}/uploads/${booking.offerId.avatarUrl}`,
          category: booking.offerId.category.category,
          offerName: booking.offerId.name,
          date: new Date(Date.now()),
          title: 'Offer has been Approved',
          bookingLink: `${settings.appURL}/inbox/${booking.id}/booking`,
        };
        const html = require('./../services/mailTemplates').changeStatus(data);

        mailHelper.send(booking.clientId.email, subject, 'Request has been Approved', html, (err, info) => {
          if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
          resolve(info);
        });
      });
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.decline = function (creator, params, offerId) {
  const Booking = mongoose.model('Booking');
  const Calendar = mongoose.model('Calendar');
  let booking = {};
  return Booking.findOne({
    _id: params.bookingId,
    offerCreatorId: creator.id,
    offerId: offerId,
    status: 'pending'
  }).populate('clientId')
    .populate({path: 'offerId', populate: {path: 'category'}})
    .populate({path: 'offerId', populate: {path: 'subCategory'}})
    .then(existBooking => {
      if (!existBooking) throw new AppError({status: 400, message: errorMessages.BOOKING_NOT_FOUND});
      booking = existBooking;
      existBooking.set('status', 'decline');
      return existBooking.save();
    })
    .then(booking => Calendar.deleteMany({bookingId: booking.id}))
    .then(() => this.core.chat.sendSystemMessage('Request has been declined', params.bookingId))
    .then(() => {
      return new Promise((resolve, reject) => {
        const subject = 'Offer has been declined';
        const data = {
          offerPhotoURL: `${settings.appURL}/uploads/${booking.offerId.avatarUrl}`,
          category: booking.offerId.category.category,
          offerName: booking.offerId.name,
          date: new Date(Date.now()),
          title: 'Request has been declined',
          bookingLink: `${settings.appURL}/inbox/${booking.id}/booking`,
        };
        const html = require('./../services/mailTemplates').changeStatus(data);

        mailHelper.send(booking.clientId.email, subject, 'Request has been declined', html, (err, info) => {
          if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
          resolve(info);
        });
      });
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.copyOffer = function (creator, params) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  const OfferPhoto = mongoose.model('OfferPhoto');
  const OfferDetails = mongoose.model('OfferDetails');
  let avatarUrl = '';
  let chain = Promise.resolve();
  let oldOffer = {};
  let newOffer = {};
  return Offer.findOne({
    _id: params.id,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
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
      return Offer.create({
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
    .then(createdCopyOffer => {
      avatarUrl = createdCopyOffer.avatarUrl;
      newOffer = createdCopyOffer.toJSON();
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
        return chain.then(res => createdCopyOffer)
      }
      return createdCopyOffer;
    })
    .then(createdCopyOffer => {
      avatarUrl = createdCopyOffer.avatarUrl;
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
                    createdCopyOffer.set('avatarUrl', newOfferPhoto.photoUrl);
                    createdCopyOffer.save();
                    newOffer.avatarUrl = newOfferPhoto.photoUrl;
                  }
                  newOffer.offerPhoto.push(newOfferPhoto.toJSON())
                })
            })
        });
        return chain.then(res => createdCopyOffer)
      }

      return chain.then(res => createdCopyOffer)
    })
    .then(createdCopyOffer => {
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
        return chain.then(res => createdCopyOffer)
      }
      return createdCopyOffer;
    })
    .then(createdCopyOffer => {

      return newOffer;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Offer.prototype.updateCalendarPrice = function (creator, params, offerId, calendarId) {
  const Offer = mongoose.model('Offer');
  const Calendar = mongoose.model('Calendar');
  return Offer.findOne({
    _id: offerId,
    userId: creator.id
  })
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Calendar
        .findOne({
          offerId: offerId,
          _id: calendarId
        })
        .then(existCalendar => {
          if (!existCalendar) throw new AppError({status: 400, message: errorMessages.CALENDAR_NOT_FOUND});
          if (!params.newPrice) throw new AppError({status: 400, message: errorMessages.BAD_DATA});
          existCalendar.set('pricePerDay', params.newPrice);
          return existCalendar.save();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

module.exports = Offer;
