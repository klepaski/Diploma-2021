const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  crypto = require('crypto'),
  settings = require('./../config');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ClientSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    trim: true
  },
  username: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    trim: true,
    default: 'client'
  },
  status: {
    type: String,
    trim: true,
    default: 'inActive'
  },
  profilePictureUrl: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    enum: ['company', 'privatePerson'],
    trim: true
  },
  verificationDataUrl: {
    type: String,
    trim: true
  },
  token: {
    type: String,
    trim: true
  },
  provider: {
    type: String,
    trim: true
  },
  confirmMail: {
    type: Boolean,
    trim: true,
    default: false
  },
  confirmPhone: {
    type: Boolean,
    trim: true,
    default: false
  },
});

ClientSchema.pre('save', function (next) {
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

ClientSchema.methods.generateToken = function (cb) {
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


ClientSchema.statics.findByToken = function (token, cb) {
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


ClientSchema.statics.findByIdentifier = function (identifier, cb) {
  var opts = {};

  if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
    opts._id = identifier;
  } else {
    opts.email = identifier;
  }

  this.findOne(opts, cb);
};

ClientSchema.statics.authenticate = function (identifier, password, cb) {

  this.findByIdentifier(identifier, function (err, user) {
    if (err) {
      return cb(err);
    }
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

ClientSchema.methods.comparePassword = function (password, cb) {

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

ClientSchema.method('toJSON', function () {
  return {
    id: this._id,
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    city: this.city,
    email: this.email,
    phone: this.phone,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    role: this.role,
    status: this.status,
    confirmMail: this.confirmMail,
    confirmPhone: this.confirmPhone,
    type: this.type,
    profilePictureUrl: this.profilePictureUrl,
    verificationDataUrl: this.verificationDataUrl
  }
});

module.exports = mongoose.model('Client', ClientSchema);
