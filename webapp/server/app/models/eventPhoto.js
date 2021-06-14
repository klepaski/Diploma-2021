const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const EventPhotoSchema = new mongoose.Schema({
  eventId:{
    type: ObjectId,
    ref: 'Event',
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  thumbPath: {
    type: String,
    trim: true
  },
  photoURL: {
    type: String,
    trim: true,
    required: true
  }
});

EventPhotoSchema.method('toJSON', function () {
  return {
    id: this._id,
    eventId: this.eventId,
    title: this.title,
    description: this.description,
    thumbPath: this.thumbPath,
    photoURL: this.photoURL
  }
});

module.exports = mongoose.model('EventPhoto', EventPhotoSchema);
