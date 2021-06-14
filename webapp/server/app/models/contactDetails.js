const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  settings = require('./../config');

const ObjectId = mongoose.Schema.Types.ObjectId;

const ContactDetailsSchema = new mongoose.Schema({
  programmerId: {
    type: ObjectId,
    ref: 'Programmer',
    trim: true
  },
  IsMainContact: {
    type: Boolean,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  contactName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    trim: true,
    default: 'programmer'
  },
  videoUrl: [{
    type: String,
    trim: true,
  }],
  photoUrl: [{
    type: String,
    trim: true,
  }],
  reviews: [{
    type: String,
    trim: true,
  }],
});

ContactDetailsSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    user.updatedAt = Date.now();

    next();
  });
});

ContactDetailsSchema.methods.generateToken = function (cb) {
  if (!this._id) {
    return cb({status: 400, message: 'User needs to be saved.'});
  }

  crypto.randomBytes(24, function (ex, buf) {
    let password = buf.toString('hex');

    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return cb(err);
      }

      this.token = hash;

      var userToken = new Buffer(
        this._id.toString() + ':' + password
      ).toString('base64');

      cb(null, userToken);

    }.bind(this));
  }.bind(this));
};

ContactDetailsSchema.statics.findByToken = function (token, cb) {
  if (!token) {
    return cb(null, null);
  }
  let tokenParts = new Buffer(token, 'base64').toString('ascii').split(':'),
    userId = tokenParts[0],
    hash = tokenParts[1];

  if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
    return cb(null, null);
  }

  this.findById(userId, function (err, user) {
    if (err) {
      return cb(err);
    }

    if (!user) {
      return cb(null, null);
    }

    bcrypt.compare(hash, user.token, function (err, isMatch) {
      if (err) {
        return cb(err);
      }

      if (isMatch) {
        return cb(null, user);
      }

      cb(null, null);
    });
  });
};

ContactDetailsSchema.statics.findByIdentifier = function (identifier, cb) {
  var opts = {};

  if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
    opts._id = identifier;
  } else {
    opts.email = identifier;
  }

  this.findOne(opts, cb);
};

ContactDetailsSchema.statics.authenticate = function (identifier, password, cb) {

  this.findByIdentifier(identifier, function (err, user) {
    console.log('user', user)
    if (err) {
      return cb(err);
    }
    console.log(user, 'user')
    // Does the user exist?
    if (!user) {
      return cb(null, null, 0);
    }

    // Is password okay?
    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      if (isMatch) {
        return cb(null, user);
      }
      // Bad password
      return cb(null, null, 1);
    });
  });
};

ContactDetailsSchema.methods.comparePassword = function (password, cb) {

  var local = settings.auth.local,
    salt = local && local.salt;

  // Legacy password hashes
  if (salt && (hash.sha256(password, salt) === this.password)) {
    return cb(null, true);
  }

  // Current password hashes
  bcrypt.compare(password, this.password, function (err, isMatch) {

    if (err) {
      return cb(err);
    }

    if (isMatch) {
      return cb(null, true);
    }

    cb(null, false);

  });

};

ContactDetailsSchema.method('toJSON', function () {
  return {
    id: this._id,
    programmerId: this.programmerId,
    IsMainContact: this.IsMainContact,
    title: this.title,
    contactName: this.contactName,
    email: this.email,
    phone: this.phone,
    role: this.role,
    videoUrl: this.videoUrl,
    photoUrl: this.photoUrl,
    reviews: this.reviews
  }
});

module.exports = mongoose.model('ContactDetails', ContactDetailsSchema);
