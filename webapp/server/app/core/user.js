'use strict';

const mongoose = require('mongoose');
const errorMessages = require('../services/errorMessages');
const AppError = require('../services/error');
const jwt = require('jsonwebtoken');
const settings = require('./../config');
const filesHelper = require('../services/filesHelper');
const mailHelper = require('../services/mailHelper');
const Random = require("random-js").Random;
const fs = require('fs');
const ObjectId = mongoose.Types.ObjectId;

//const APP_URL = process.env.APP_URL || config.http.port;

function User(options) {
  this.core = options.core;
}

User.prototype.get = function (userId) {
  const User = mongoose.model('User');
  return User
    .findOne({_id: userId})
    .populate('photo')
    .populate('coverPhoto')
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      return existUser;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.create = function (params) {
  const User = mongoose.model('User');
  const OfferParticipants = mongoose.model('OfferParticipants');
  let result = {};
  return User
    .findOne({email: params.email})
    .then(existUser => {
      if (existUser) throw new AppError({status: 400, message: errorMessages.EMAIL_EXISTS});

      const user = new User();
      user.set('email', params.email);
      user.set('firstName', params.firstName);
      user.set('lastName', params.lastName);
      user.set('password', params.password);
      user.set('birthday', params.birthday);
      return user.save();
    })
    .then(creatorUser => {
        console.log('params.offerId', params.offerId)
        if (!params.offerId) return creatorUser;
        return OfferParticipants.findOne({
          email: params.email,
          _id: params.offerId
        })
          .then(existOfferParticipant => {
            if (!existOfferParticipant) return creatorUser;
            console.log('existOfferParticipant', existOfferParticipant);
            existOfferParticipant.set('confirm', true);
            existOfferParticipant.set('userId', creatorUser.id);
            existOfferParticipant.save();
            return creatorUser;
          })
      }
    )
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      result = existUser.toJSON();
      return new Promise((resolve, reject) => {
        existUser.generateToken((err, token) => {
          if (err) return err;
          existUser.save((err) => {
            if (err) reject(err);
            console.log('settings.appURL', settings.appURL)
            const subject = 'Email confirmation';

            const data = {
              appURL: settings.appURL,
              token: token
            };
            const html = require('./../services/mailTemplates').confirmEmail(data);

            return mailHelper.send(existUser.email, subject, 'TEXT', html, (err, info) => {
              if (err) {
                result.sendMail = err;
                resolve(result);
              }
              result.sendMail = info;
              resolve(result);
            });

          });
        });
      });
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      console.log(err)
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.auth = function (params) {
  const User = mongoose.model('User');
  return new Promise((resolve, reject) => {
    User.authenticate(params.email, params.password, function (err, user) {
      if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
      if (!user) return reject(new AppError({status: 400, message: errorMessages.BAD_DATA}));
      if (user.status !== 'isActive') return reject(new AppError({
        status: 400,
        message: errorMessages.NOT_ACTIVE_USER
      }));
      let userObj = user.toJSON();
      userObj.token = jwt.sign(userObj, settings.server.secret, {expiresIn: settings.server.expiresIn});
      resolve(userObj);
    });
  })
};

User.prototype.getProfile = function (user) {
  return new Promise((resolve, reject) => {
    const User = mongoose.model('User');
    if (!user) reject(new AppError({status: 400, message: errorMessages.USER_NOT_FOUND}));
    return User
      .findOne({_id: user.id})
      .populate('photo')
      .populate('coverPhoto')
      .then(existUser => {
        if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
        resolve(existUser);
      })
      .catch(err => {
        if (err instanceof AppError) reject(err);
        reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
      })
  });
};

User.prototype.updateProfile = function (user, params) {
  const User = mongoose.model('User');
  return User
    .findOne({_id: user.id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      if (params.email) existUser.set('email', params.email);
      if (params.firstName) existUser.set('firstName', params.firstName);
      if (params.lastName) existUser.set('lastName', params.lastName);
      if (params.birthday) existUser.set('birthday', params.birthday);
      if (params.gender) existUser.set('gender', params.gender);
      if (params.education) existUser.set('education', params.education);
      if (params.experience) existUser.set('experience', params.experience);
      /*if (params.country) existUser.set('country', params.country);
      if (params.language) existUser.set('language', params.language);
      if (params.currency) existUser.set('currency', params.currency);
      if (params.describe) existUser.set('describe', params.describe);
      if (params.vatNumber) existUser.set('vatNumber', params.vatNumber);
      if (params.timezone) existUser.set('timezone', params.timezone);*/

      return existUser.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.addProfilePhoto = function (id, files) {
  const User = mongoose.model('User');
  return User
    .findOne({_id: id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      if (!files) throw new AppError({status: 400, message: errorMessages.BAD_DATA});
      return filesHelper.savePhoto(files[0], 'user')
        .then(file => file.path)
        .then(filePath => {
          existUser.set('profilePhotoURL', filePath);
          return existUser.save();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.deleteProfilePhoto = function (id, files) {
  const User = mongoose.model('User');
  return User
    .findOne({_id: id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      return filesHelper.deletePhoto(existUser.profilePhotoURL)
        .then(filePath => {
          existUser.set('profilePhotoURL', '');
          return existUser.save();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.confirmPhone = function (id, phone) {
  const random = new Random();
  const code = random.integer(10000, 99999);
  const UserCode = mongoose.model('UserCode');
  const User = mongoose.model('User');
  return User.findOne({_id: id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      return UserCode
        .create({
          userId: id,
          confirmCode: code
        })
        .then(userCode => {
          const subject = 'Confirm code';
          const html = '<div style="font-size: 20px; color: #ffffff; background-color: #069489; padding: 20px; text-align: center">' +
            '<span style="font-weight: bold">Tallent booking:</span> Уведомление' +
            '</div> ' + '<div style="padding: 20px"> ' +
            'Подтверждение телефона ' + phone + '<div>' + ' Секретный код: ' + userCode.confirmCode;

          return new Promise((resolve, reject) => {
            mailHelper.send(existUser.email, subject, 'text', html, (err, info) => {
              if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
              resolve(info);
            });
          });
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.confirmMail = function (token) {
    const User = mongoose.model('User');
    return new Promise((resolve, reject) => {
        User.findByToken(token, (err, user) => {
            if (err) return reject(err);
            if (!user) return reject(new AppError({status: 400, message: errorMessages.TOKEN_IS_WRONG, err: err}));
            let roles = user.toJSON().role;
            if (!~user.role.indexOf('programmer')) roles.push('programmer');
            user.set('role', roles);
            user.set('confirmMail', true);
            user.set('status', 'isActive');
            user.save();
            resolve(user);
        });
    });
};

User.prototype.createProgrammer = function (creator, params) {
  const User = mongoose.model('User');
  const Programmer = mongoose.model('Programmer');
  return User
    .findOne({_id: creator.id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      let arrayRole = existUser.role;
      if (!~arrayRole.indexOf('programmer')) {
        arrayRole.push('programmer');
        existUser.set('role', arrayRole);
      }
      return existUser.save();
    })
    .then(user => Programmer
      .create({
        userId: user.id
      })
    )
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.getProgrammers = function (creator) {
  const Programmer = mongoose.model('Programmer');
  return Programmer
    .find({userId: creator.id})
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.createClient = function (creator, params) {
  const User = mongoose.model('User');
  const Client = mongoose.model('Client');
  return User
    .findOne({_id: creator.id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      let arrayRole = existUser.role;
      if (!~arrayRole.indexOf('client')) {
        arrayRole.push('client');
        existUser.set('role', arrayRole);
      }
      return existUser.save();
    })
    .then(user => Client
      .create({
        userId: user.id,
      })
    )
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.getClients = function (creator) {
  const Client = mongoose.model('Client');
  return Client
    .find({userId: creator.id})
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.createOrganiser = function (creator, params) {
  const User = mongoose.model('User');
  const Organiser = mongoose.model('Organiser');
  return User
    .findOne({_id: creator.id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      let arrayRole = existUser.role;
      if (!~arrayRole.indexOf('organiser')) {
        arrayRole.push('organiser');
        existUser.set('role', arrayRole);
      }
      return existUser.save();
    })
    .then(user => Organiser
      .create({
        userId: user.id,
        name: params.name,
        description: params.description
      })
    )
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.getOrganisers = function (creator) {
  const Organiser = mongoose.model('Organiser');
  return Organiser
    .find({userId: creator.id})
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.getProgrammerCategories = function () {
  const ProgrammerCategories = mongoose.model('ProgrammerCategories');
  return ProgrammerCategories
    .find()
    .populate('parentCategory')
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

/*User.prototype.addDocuments = function (creator, params, files) {
  const User = mongoose.model('User');
  return User
    .findOne({_id: creator.id})
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      let passportUrlArray = [];
      let documentUrlArray = [];
      passportUrlArray = existUser.passportUrl;
      documentUrlArray = existUser.documentsUrl;
      let chain = Promise.resolve();
      files.forEach((file) => {
        chain = chain
          .then(res => {
            if (~file.fieldname.indexOf('passport')) return filesHelper.savePhoto(file, 'passport');
            if (~file.fieldname.indexOf('document')) return filesHelper.savePhoto(file, 'document');
          })
          .then(file => {
            if (!file) return;
            if (~file.folder.indexOf('passport')) passportUrlArray.push(file.path);
            if (~file.folder.indexOf('document')) documentUrlArray.push(file.path);
          })
          .catch(err => {
            if (err instanceof AppError) throw err;
            throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
          })
      });
      return chain
        .then(res => {
            if (params.country) existUser.set('country', params.country);
            existUser.set('passportUrl', passportUrlArray);
            existUser.set('documentsUrl', documentUrlArray);
            return existUser.save();
          }
        )
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};*/

User.prototype.findOrCreate = function (profile, typeRegistration, offerId, params) {
  const User = mongoose.model('User');
  const OfferParticipants = mongoose.model('OfferParticipants');
  //console.log('profile', profile);
  if (!profile || !profile.emails || profile.emails.length === 0) throw new AppError({
    status: 400,
    message: errorMessages.USER_NOT_FOUND
  });
  return User
    .findOne({
      email: profile.emails[0].value
    })
    .then(existUser => {
      if (existUser) return existUser;
      const user = new User();
      user.set('socialNetworkId', profile.id);
      user.set('email', profile.emails[0].value);
      user.set('typeRegistration', typeRegistration);
      user.set('firstName', profile.name.givenName);
      user.set('lastName', profile.name.familyName);
      user.set('gender', profile.gender);
      user.set('educaion', profile.educaion);
      user.set('experience', profile.experience);
      user.set('profilePhotoURL', profile.photos[0].value);
      user.set('status', 'isActive');
      return user.save();
    })
    .then(creatorUser => {
      return filesHelper.copyPhotoSocialNetwork(profile.photos[0].value, 'user')
        .then(filePath => {
          creatorUser.set('profilePhotoURL', filePath);
          return creatorUser.save();
        })
    })
    .then(creatorUser => {
        if (!offerId || !ObjectId.isValid(offerId)) return creatorUser;
        console.log('offerId', offerId)
        return OfferParticipants.findOne({
          email: creatorUser.email,
          _id: offerId
        })
          .then(existOfferParticipant => {
            if (!existOfferParticipant) return creatorUser;
            console.log('existOfferParticipant', existOfferParticipant);
            existOfferParticipant.set('confirm', true);
            existOfferParticipant.set('userId', creatorUser.id);
            existOfferParticipant.save();
            return creatorUser;
          })
      }
    )
    .then(user => {
      let userObj = user.toJSON();
      userObj.token = jwt.sign(userObj, settings.server.secret, {expiresIn: settings.server.expiresIn});
      return userObj;
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.getEventTypes = function (user) {
  const EventTypes = mongoose.model('EventTypes');
  return EventTypes
    .find()
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.updatePassword = function (user, params) {
  const User = mongoose.model('User');

  return new Promise((resolve, reject) => {
    User.authenticate(user.email, params.oldPassword, function (err, user) {
      if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
      if (!user) return reject(new AppError({status: 400, message: errorMessages.BAD_DATA}));
      if (user.status !== 'isActive') return reject(new AppError({
        status: 400,
        message: errorMessages.NOT_ACTIVE_USER
      }));
      let userObj = user.toJSON();
      userObj.token = jwt.sign(userObj, settings.server.secret, {expiresIn: settings.server.expiresIn});

      user.set('password', params.newPassword);
      resolve(user.save());
    });
  })


};

User.prototype.getBookings = function (user, params) {
  const Message = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  const PreChat = mongoose.model('PreChat');
  return Booking
    .find({$or: [{clientId: user.id}, {offerCreatorId: user.id}]})
    .populate('offerId')
    .populate('clientId')
    .populate('offerCreatorId')
    .exec()
    .then(bookings => {
      let response = bookings.map(booking => JSON.parse(JSON.stringify(booking)));

      let chain = Promise.resolve();
      response.forEach(booking => {
        chain = chain
          .then(() => Message.findOne({bookingId: booking.id}).sort('-createDate').exec())
          .then(message => booking.lastMessage = message)
          .then(() => Message.find({bookingId: booking.id, status: 'pending', senderId: {$ne: user.id}}))
          .then(messages => booking.unreadMessages = messages.length)
      });

      return chain.then(() => response)
    })
    .then(response => PreChat
      .find({$or: [{clientId: user.id}, {offerCreatorId: user.id}]})
      .populate('offerId')
      .populate('clientId')
      .populate('offerCreatorId')
      .exec()
      .then(foundPreChats => {
        let preChats = foundPreChats.map(preChat => JSON.parse(JSON.stringify(preChat)));

        let chain = Promise.resolve();
        preChats.forEach(preChat => {
          chain = chain
            .then(() => Message.findOne({preChatId: preChat.id}).sort('-createDate').exec())
            .then(message => preChat.lastMessage = message)
            .then(() => Message.find({preChatId: preChat.id, status: 'pending', senderId: {$ne: user.id}}))
            .then(messages => preChat.unreadMessages = messages.length)
        });

        return chain.then(() => response.concat(preChats))
          .then(response => {
            if (params.skip) response = response.slice(params.skip);
            if (params.take) response = response.slice(0, params.take);
            return response;
          })
      }))
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

// User.prototype.getMyOffers = function (creator) {
//   const Offer = mongoose.model('Offer');
//   const Calendar = mongoose.model('Calendar');
//   const OfferDetails = mongoose.model('OfferDetails');
//   const OfferPhoto = mongoose.model('OfferPhoto');
//   let chain = Promise.resolve();
//   return Offer.find({userId: creator.id})
//     .then(existOffers => {
//       if (!existOffers) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
//       return existOffers;
//     })
//     .then(existOffers => {
//       let newOffers = [];
//       existOffers.forEach(existOffer => {
//         chain = chain
//           .then(res => {
//             existOffer = existOffer.toJSON();
//             return Calendar.find({offerId: existOffer.id})
//               .then(existCalendar => {
//                 existOffer.calendar = existCalendar;
//               })
//               .then(a => {
//                 return OfferDetails.find({offerId: existOffer.id})
//                   .then(existOfferDetails => {
//                     existOffer.offerDetails = existOfferDetails;
//                   });
//               })
//               .then(a => {
//                 return OfferPhoto.find({offerId: existOffer.id})
//                   .then(existOfferPhoto => {
//                     existOffer.offerPhoto = existOfferPhoto;
//                     newOffers.push(existOffer);
//                   });
//               });
//           });
//       });
//       return chain.then(res => newOffers)
//     })
//     .catch(err => {
//       if (err instanceof AppError) throw err;
//       throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
//     })
// };

User.prototype.addPhotos = function (creator, files) {
  const UserPhoto = mongoose.model('UserPhoto');
  const User = mongoose.model('User');
  let photoObjects = [];
  return User
    .findOne({
      _id: creator.id
    })
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      let newPhotoUrlArray = [];
      let chain = Promise.resolve();
      let response = [];
      photoObjects = existUser.photo;
      files.forEach((file) => {
        chain = chain
          .then(res => filesHelper.savePhoto(file, 'userPhoto'))
          .then(file => {
            newPhotoUrlArray.push(file.path);
            return UserPhoto
              .create({
                userId: creator.id,
                photoUrl: file.path
              })
              .then(userPhoto => {
                photoObjects.push(userPhoto.id);
                return userPhoto;
              })
              .then(userPhoto => response.push(userPhoto))
          })
      });
      return chain
        .then(res => {
          existUser.set('photo', photoObjects);
          return existUser.save();
        })
        .then(res => response)
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.getPhotos = function (creator, params) {
  const UserPhoto = mongoose.model('UserPhoto');
  const User = mongoose.model('User');
  return User
    .findOne({
      _id: creator.id
    })
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      return UserPhoto.find({
        userId: creator.id
      })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.deletePhoto = function (creator, id) {
  const UserPhoto = mongoose.model('UserPhoto');
  return UserPhoto.findOne({
    _id: id,
    userId: creator.id
  })
    .then(existUserPhoto => {
      if (!existUserPhoto) throw new AppError({status: 400, message: errorMessages.USER_PHOTO_NOT_FOUND});
      return existUserPhoto.remove();
    })
    .then(deletedUserPhoto => filesHelper.deletePhoto(deletedUserPhoto.photoUrl))
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.coverPhoto = function (creator, photoId) {
  const UserPhoto = mongoose.model('UserPhoto');
  const User = mongoose.model('User');
  return User
    .findOne({
      _id: creator.id
    })
    .then(existUser => {
      if (!existUser) throw new AppError({status: 400, message: errorMessages.USER_NOT_FOUND});
      return UserPhoto.findOne({
        userId: creator.id,
        _id: photoId
      })
        .then(existUserPhoto => {
          if (!existUserPhoto) throw new AppError({status: 400, message: errorMessages.USER_PHOTO_NOT_FOUND});
          existUser.set('coverPhoto', existUserPhoto.id);
          return existUser.save();
        })
        .then(existUserPhoto => User.findOne({_id: existUserPhoto.id}).populate('coverPhoto'))
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.likeOffer = function (creator, offerId) {
  const Offer = mongoose.model('Offer');
  const Like = mongoose.model('Like');
  const User = mongoose.model('User');
  return Offer
    .findOne({_id: offerId})
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Like.findOne({userId: creator.id, offerId: offerId})
        .then(existLike => {
          if (!existLike) {
            existOffer.countLikes += 1;
            existOffer.save();
            return Like.create({userId: creator.id, offerId: offerId});
          }
          existOffer.countLikes -= 1;
          existOffer.save();
          return existLike.remove();
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.reviewsOffer = function (offerId) {
  const Offer = mongoose.model('Offer');
  const Review = mongoose.model('Review');
  const User = mongoose.model('User');
  return Offer
    .findOne({_id: offerId})
    .then(existOffer => {
      if (!existOffer) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      return Review.find({offerId: offerId}).populate('userId').exec();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.userReviews = function (userId) {
  const Offer = mongoose.model('Offer');
  const Review = mongoose.model('Review');
  const User = mongoose.model('User');
  return Review.find({userId: userId}).populate('userId')
    .exec()
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.myLikeOffers = function (creator) {
  const Like = mongoose.model('Like');
  return Like
    .find({userId: creator.id})
    .populate({path: 'offerId', populate: {path: 'subCategory'}})
    .populate({path: 'offerId', populate: {path: 'category'}})
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

User.prototype.testEmail = function (id) {
  // =====
  // Confitm email
  // ==========
  const data = {
    token: '123',
    appURL: 'app_url'
  }
  const html = require('./../services/mailTemplates').confirmEmail(data)


  // =====
  // invite participants
  // ==========
  // const data = {
  //     appURL: 'app_url',
  //     offerParticipantsId: '123',
  //     offerOwnerFullname: 'Yury ZHuk',
  //     offerOwnerPhotoURL:  'https://programmerbooking.net/logo_mail.png"k',
  //     offerId: '1',
  //     offerName: 'test offer'
  // };
  // const html = require('./../services/mailTemplates').inviteParticipants(data)


  // =====
  // invite participants
  // ==========
  // const data = {
  //     senderFullName: 'Yury Zhuk',
  //     senderPhoto:  'https://programmerbooking.net/logo_mail.png"k',
  //     date: '11.21.2001',
  //     text: 'message text'
  // };
  // const html = require('./../services/mailTemplates').newMessage(data)


  // =====
  // invite participants
  // ==========
  // const data = {
  //   confirmationTime: '22:40:21',
  //   userPhotoURL: 'https://programmerbooking.net/uploads/user/2020/02/18/36bcf9a3966ebdf466224bdc88707f93.png',
  //   userFullname: 'Yury Zhuk',
  //   offerPhotoURL: 'https://programmerbooking.net/uploads/offerPhoto/2020/03/02/f2ef437c8023ceabf069eef1bea8ec4a.png',
  //   category: 'LIVE ACTION',
  //   offerName: 'Name - The Pirates of Arabia Live action',
  //   date: 'Friday 9th September',
  //   time: '14:00 - 18:00',
  //   includes: 'Bicycle, yellow princess costume, hat with horns',
  //   pticeLeft: 'AED 500 x 1 Act',
  //   pticeRight: 'AED 500',
  //   location: 'Hacimimi Mashakasli, Malish №24, 13, Istanbul 34421 Turkey',
  //   locationDetails: 'Any directions or important details about the destination location are welcome',
  //   additional: 'Any details, requirements, wishes, propositions can be described here'
  // };
  // const html = require('./../services/mailTemplates').newRequest(data)


  return mailHelper.send('zhukrealll@gmail.com', 'test mail', 'TEXT', html, (err, info) => {
    if (err) {
      result.sendMail = err;
      resolve(result);
    }
    result.sendMail = info;
    resolve(result);
  });

};


User.prototype.confirmOffers = function (user, offerParticipantId) {
  const OfferParticipants = mongoose.model('OfferParticipants');
  return OfferParticipants.findOne({_id: offerParticipantId})
    .then(offerParticipant => {
      if (!offerParticipant) throw new AppError({status: 400, message: errorMessages.OFFER_NOT_FOUND});
      offerParticipant.set('confirm', true);
      offerParticipant.set('userId', user.id);
      return offerParticipant.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

module.exports = User;
