'use strict';

const mongoose = require('mongoose');
const errorMessages = require('../services/errorMessages');
const AppError = require('../services/error');
const mailHelper = require('../services/mailHelper');
const settings = require('./../config');

function Chat(options) {
  this.core = options.core;
}

Chat.prototype.getNewMessages = function (user) {
  const Messages = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  const PreChat = mongoose.model('PreChat');

  return Booking
    .find({$or: [{clientId: user.id}, {offerCreatorId: user.id}]}).exec()
    .then(bookings => bookings.map(booking => booking.id))
    .then(bookingIds => PreChat.find({$or: [{clientId: user.id}, {offerCreatorId: user.id}]}).exec()
      .then(preChats => preChats.map(booking => booking.id))
      .then(preChatsIds => Messages.find({
        $or: [{bookingId: bookingIds}, {preChatId: preChatsIds}],
        status: {$ne: 'read'}
      })
        .populate({path: 'bookingId', populate: {path: 'clientId'}})
        .populate({path: 'bookingId', populate: {path: 'offerCreatorId'}})
        .populate({path: 'preChatId', populate: {path: 'clientId'}})
        .populate({path: 'preChatId', populate: {path: 'offerCreatorId'}})
        .exec())
    )
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.createPreChat = function (user, offerId, message) {
  const Message = mongoose.model('Message');
  const PreChat = mongoose.model('PreChat');
  const Offer = mongoose.model('Offer');
  return Offer.findOne({_id: offerId})
    .then(offer => {
      if (!offer) throw new AppError({status: 404, message: errorMessages.OFFER_NOT_FOUND});
      return PreChat.findOne({clientId: user.id, offerId: offerId, offerCreatorId: offer.userId})
        .then(existPreChat => {
          if (existPreChat) return existPreChat;
          return PreChat.create({clientId: user.id, offerId: offerId, offerCreatorId: offer.userId})
        })
        .then(preChat => Message.create({preChatId: preChat._id, text: message, senderId: user.id}))
        .then(message => Message.findOne({_id: message._id})
          .populate('senderId')
          .populate({path: 'preChatId', populate: {path: 'clientId'}})
          .populate({path: 'preChatId', populate: {path: 'offerCreatorId'}})
          .exec())
        .then(message => {
          return new Promise((resolve, reject) => {
            const subject = 'New message';
            const data = {
              senderPhoto: `${settings.appURL}/uploads/${message.senderId.profilePhotoURL}`,
              senderFullName: message.senderId.firstName + ' ' + message.senderId.lastName,
              date: message.createDate,
              text: message.text,
              bookingLink: `${settings.appURL}/inbox/${message.preChatId._id}/offer`,
            };
            const html = require('./../services/mailTemplates').newMessage(data);

            mailHelper.send(message.preChatId.clientId.email, subject, 'New message', html, (err, info) => {
              if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
              resolve(message);
            });
          });
        })
        .then(message => {
          return {message: message, recipientId: offer.userId}
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.getPreChat = function (chatId, user) {
  const Message = mongoose.model('Message');
  const PreChat = mongoose.model('PreChat');
  let chain = Promise.resolve();
  return PreChat
    .findOne({_id: chatId})
    .populate('offerId')
    .exec()
    .then(preChat => {
      return Message.find({
        preChatId: preChat.id,
        status: 'delivered'
      })
        .then(mesages => {
          mesages.forEach(mesage => {
            chain = chain
              .then(res => {
                mesage.set('status', 'read');
                mesage.save();
              });
          });
          return chain.then(res => preChat)
        })
    })
    .then(booking => {
      let response = JSON.parse(JSON.stringify(booking));
      return Message.findOne({preChatId: chatId}).sort('-createDate').exec()
        .then(message => {
          response.lastMessage = message;
          return response;
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.getChat = function (chatId, user) {
  const Message = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  const Calendar = mongoose.model('Calendar');
  let chain = Promise.resolve();
  return Booking
    .findOne({_id: chatId})
    .populate({path: 'offerId', populate: {path: 'category'}})
    .populate({path: 'offerId', populate: {path: 'subCategory'}})
    .populate({path: 'offerSnapshotId', populate: {path: 'category'}})
    .populate({path: 'offerSnapshotId', populate: {path: 'subCategory'}})
    .exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
      return Message.find({
        bookingId: booking.id,
        status: 'delivered'
      })
        .then(mesages => {
          mesages.forEach(mesage => {
            chain = chain
              .then(res => {
                mesage.set('status', 'read');
                mesage.save();
              });
          });
          return chain.then(res => booking)
        })
    })
    .then(booking => {
      let response = JSON.parse(JSON.stringify(booking));
      return Message.findOne({bookingId: chatId}).sort('-createDate').exec()
        .then(message => {
          response.lastMessage = message;
          return response;
        }).then(res => {
          return Calendar.find({'bookingId': booking.id}).then(calendars => {
            response.calendar = calendars;
            return response;
          })
        });
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.getChatMessages = function (chatId, user) {
  const Messages = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  return Booking
    .findOne({_id: chatId, $or: [{clientId: user.id}, {offerCreatorId: user.id}]}).populate('offerId').exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
    })
    .then(() => Messages.find({bookingId: chatId})
      .populate({path: 'bookingId', populate: {path: 'clientId'}})
      .populate({path: 'bookingId', populate: {path: 'offerCreatorId'}})
      .exec())
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.getPreChatMessages = function (chatId, user) {
  const Messages = mongoose.model('Message');
  const PreChat = mongoose.model('PreChat');
  return PreChat
    .findOne({_id: chatId, $or: [{clientId: user.id}, {offerCreatorId: user.id}]}).populate('offerId').exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
    })
    .then(() => Messages.find({preChatId: chatId})
      .populate({path: 'preChatId', populate: {path: 'clientId'}})
      .populate({path: 'preChatId', populate: {path: 'offerCreatorId'}})
      .exec())
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.createPreChatMessage = function (chatId, user, text) {
  const Messages = mongoose.model('Message');
  const PreChat = mongoose.model('PreChat');

  let recipientId = '';
  return PreChat
    .findOne({_id: chatId, $or: [{clientId: user.id}, {offerCreatorId: user.id}]}).exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
      recipientId = booking.clientId.toString() === user.id.toString() ? booking.offerCreatorId : booking.clientId;
    })
    .then(() => Messages.create({preChatId: chatId, text: text, senderId: user.id}))
    .then(message => Messages.findOne({preChatId: chatId, text: text, senderId: user.id})
      .populate('senderId')
      .populate({path: 'preChatId', populate: {path: 'clientId'}})
      .populate({path: 'preChatId', populate: {path: 'offerCreatorId'}})
      .exec())
    .then((message) => {
      return new Promise((resolve, reject) => {
        const subject = 'New message';
        const data = {
          senderPhoto: `${settings.appURL}/uploads/${message.senderId.profilePhotoURL}`,
          senderFullName: message.senderId.firstName + ' ' + message.senderId.lastName,
          date: message.createDate,
          text: message.text,
          bookingLink: `${settings.appURL}/inbox/${message.preChatId._id}/offer`,
        };
        const html = require('./../services/mailTemplates').newMessage(data);

        mailHelper.send(message.preChatId.clientId.email, subject, 'New message', html, (err, info) => {
          if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
          resolve(message);
        });
      });
    })
    .then(message => {
      return {message: message, recipientId: recipientId}
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.createMessage = function (chatId, user, text) {
  const Messages = mongoose.model('Message');
  const Booking = mongoose.model('Booking');

  let recipientId = '';
  return Booking
    .findOne({_id: chatId, $or: [{clientId: user.id}, {offerCreatorId: user.id}]}).exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
      recipientId = booking.clientId.toString() === user.id.toString() ? booking.offerCreatorId : booking.clientId;
    })
    .then(() => Messages.create({bookingId: chatId, text: text, senderId: user.id}))
    .then(message => Messages.findOne({bookingId: chatId, text: text, senderId: user.id})
      .populate('senderId')
      .populate({path: 'bookingId', populate: {path: 'clientId'}})
      .populate({path: 'bookingId', populate: {path: 'offerCreatorId'}})
      .exec())
    .then((message) => {
      return new Promise((resolve, reject) => {
        const subject = 'New message';
        const data = {
          senderPhoto: `${settings.appURL}/uploads/${message.senderId.profilePhotoURL}`,
          senderFullName: message.senderId.firstName + ' ' + message.senderId.lastName,
          date: message.createDate,
          text: message.text,
          bookingLink: `${settings.appURL}/inbox/${message.bookingId._id}/booking`,

        };
        const html = require('./../services/mailTemplates').newMessage(data);

        mailHelper.send(message.bookingId.clientId.email, subject, 'New message', html, (err, info) => {
          if (err) return reject(new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err}));
          resolve(message);
        });
      });
    })
    .then(message => {
      return {message: message, recipientId: recipientId}
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.sendMessage = function ({message, recipientId}) {
  if (this.core.connection[recipientId]) this.core.connection[recipientId].emit('newMessage', JSON.stringify(message));
  return message;
};

Chat.prototype.sendSystemMessage = function (text, bookingId) {
  const message = {
    bookingId,
    text
  };
  console.log('system message: ', message);

  const Message = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  return Booking
    .findOne({_id: bookingId}).exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});

      return Message.create(message).then(message => {
        if (this.core.connection[booking.clientId]) this.core.connection[booking.clientId].emit('newMessage', JSON.stringify(message));
        if (this.core.connection[booking.offerCreatorId]) this.core.connection[booking.offerCreatorId].emit('newMessage', JSON.stringify(message));
        return booking
      })
    })
};

Chat.prototype.updateMessageStatus = function (chatId, messageId, user, status) {
  const Messages = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  return Booking
    .find({_id: chatId, $or: [{clientId: user.id}, {offerCreatorId: user.id}]}).exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
    })
    .then(() => Messages.findOne({_id: messageId, bookingId: chatId, senderId: {$ne: user.id}}).exec())
    .then(message => {
      if (!message) throw new AppError({status: 404, message: errorMessages.MESSAGE_NOT_FOUND});
      const newDate = new Date();

      if (status === 'read') return Messages.updateMany({
        bookingId: chatId,
        senderId: {$ne: user.id},
        status: 'delivered',
        deliveredDate: {$lte: newDate}
      }, {
        $set: {
          status: 'read',
          readDate: newDate
        }
      });

      message.status = 'delivered';
      message.deliveredDate = newDate;
      return message.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.updatePreChatMessageStatus = function (chatId, messageId, user, status) {
  const Messages = mongoose.model('Message');
  const PreChat = mongoose.model('PreChat');
  return PreChat
    .find({_id: chatId, $or: [{clientId: user.id}, {offerCreatorId: user.id}]}).exec()
    .then(booking => {
      if (!booking) throw new AppError({status: 404, message: errorMessages.BOOKING_NOT_FOUND});
    })
    .then(() => Messages.findOne({_id: messageId, preChatId: chatId, senderId: {$ne: user.id}}).exec())
    .then(message => {
      if (!message) throw new AppError({status: 404, message: errorMessages.MESSAGE_NOT_FOUND});
      const newDate = new Date();

      if (status === 'read') return Messages.updateMany({
        preChatId: chatId,
        senderId: {$ne: user.id},
        status: 'delivered',
        deliveredDate: {$lte: newDate}
      }, {
        $set: {
          status: 'read',
          readDate: newDate
        }
      });

      message.status = 'delivered';
      message.deliveredDate = newDate;
      return message.save();
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.getUnreadMessages = function (user) {
  const Message = mongoose.model('Message');
  const Booking = mongoose.model('Booking');
  const PreChat = mongoose.model('PreChat');
  let chain = Promise.resolve();
  let countUnreadMessages = 0;
  return Booking
    .find({$or: [{clientId: user.id}, {offerCreatorId: user.id}]})
    .exec()
    .then(bookings => {
      bookings.forEach(booking => {
        chain = chain
          .then(res => {
            return Message.find({
              bookingId: booking._id,
              status: 'pending',
              senderId: {$ne: user.id}
            })
              .then(messages => countUnreadMessages += messages.length)
          })
      });
      return chain.then(res => countUnreadMessages)
    })
    .then(countUnreadMessagesBooking => {
      return PreChat
        .find({$or: [{offerCreatorId: user.id}, {clientId: user.id}]})
        .exec()
        .then(preChats => {
          preChats.forEach(preChat => {
            chain = chain
              .then(res => {
                return Message.find({
                  preChatId: preChat._id,
                  status: 'pending',
                  senderId: {$ne: user.id}
                })
                  .then(messages => countUnreadMessages += messages.length)
              })
          });
          return chain.then(res => countUnreadMessages)
        })
    })
    .catch(err => {
      if (err instanceof AppError) throw err;
      throw new AppError({status: 500, message: errorMessages.SERVER_ERROR, err: err});
    })
};

Chat.prototype.updateStatus = function (user, params) {
  const Message = mongoose.model('Message');
  let chain = Promise.resolve();
  let result = [];
  if (!params.id) throw new AppError({status: 400, message: errorMessages.BAD_DATA});
  params.id.forEach(id => {
    chain = chain
      .then(res => {
        return Message.findOne({
          _id: id,
        })
          .then(message => {
            message.set('status', 'read');
            return message.save();
          })
          .then(messages => result.push(messages))
      })
  });
  return chain.then(res => result);
};


module.exports = Chat;
