const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const EventSchema = new mongoose.Schema({

  offerId:{
    type: ObjectId,
    ref: 'Equipment',
    trim: true
  },
  equipmentId:{
    type: ObjectId,
    ref: 'Equipment',
    trim: true
  },
  clientId:{
    type: ObjectId,
    ref: 'Client',
    trim: true
  },
  programmerId:{
    type: ObjectId,
    ref: 'Programmer',
    trim: true
  },


});

EventSchema.method('toJSON', function () {
  return {
    id: this._id,
    equipmentId: this.equipmentId,
    clientId: this.clientId,
    programmerId: this.programmerId,
    offerId: this.offerId
  }
});

module.exports = mongoose.model('Event', EventSchema);
