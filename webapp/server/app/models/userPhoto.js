const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserPhotoSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  photoUrl: {
    type: String,
    trim: true,
    required: true
  },
});

UserPhotoSchema.method('toJSON', function () {
  return {
    id: this._id,
    userId: this.userId,
    description: this.description,
    photoUrl: this.photoUrl
  }
});

module.exports = mongoose.model('UserPhoto', UserPhotoSchema);
