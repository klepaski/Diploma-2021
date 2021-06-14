const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  settings = require('./../config'),
  crypto = require('crypto');
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  token: {
    type: String,
    trim: true
  },
  birthday: {
    type: Date,
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
    type: Array,
    trim: true,
    default: 'user'
  },
  profilePhotoURL: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  confirmPhone: {
    type: Boolean,
    trim: true,
    default: false
  },
  confirmMail: {
    type: Boolean,
    trim: true,
    default: false
  },
  status: {
    type: String,
    trim: true,
    default: 'inActive'
  },
  country: {
    type: String,
    trim: true,
  },
  passportUrl: {
    type: Array,
    trim: true,
  },
  documentsUrl: {
    type: Array,
    trim: true,
  },
  gender: {
    type: String,
    trim: true
  },
  education: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    trim: true
  },
  language: {
    type: String,
    trim: true
  },
  currency: {
    type: String,
    trim: true
  },
  describe: {
    type: String,
    trim: true
  },
  vatNumber: {
    type: Number,
    trim: true
  },
  timezone: {
    type: String,
    trim: true
  },
  typeRegistration: {
    type: String,
    trim: true,
    enum: ['facebook', 'google']
  },
  socialNetworkId: {
    type: String,
    trim: true,
  },
  photo: [
    {
      type: ObjectId,
      ref: 'UserPhoto',
    }
  ],
  coverPhoto:
    {
      type: ObjectId,
      ref: 'UserPhoto',
    }
  ,

});

UserSchema.pre('save', function (next) {
  var user = this;
  user.updatedAt = Date.now();
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

UserSchema.methods.generateToken = function (cb) {
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


UserSchema.statics.findByToken = function (token, cb) {
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


UserSchema.statics.findByIdentifier = function (identifier, cb) {
  var opts = {};

  if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
    opts._id = identifier;
  } else {
    opts.email = identifier;
  }

  this.findOne(opts, cb);
};

UserSchema.statics.authenticate = function (identifier, password, cb) {

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

UserSchema.methods.comparePassword = function (password, cb) {

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

UserSchema.method('toJSON', function () {
  return {
    id: this._id,
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    birthday: this.birthday,
    token: this.token,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    role: this.role,
    profilePhotoURL: this.profilePhotoURL,
    confirmMail: this.confirmMail,
    status: this.status,
    country: this.country,
    passportUrl: this.passportUrl,
    documentsUrl: this.documentsUrl,
    gender: this.gender,
    education: this.education,
    experience: this.experience,
    language: this.language,
    currency: this.currency,
    describe: this.describe,
    vatNumber: this.vatNumber,
    timezone: this.timezone,
    photo: this.photo,
    coverPhoto: this.coverPhoto,
  }
});

module.exports = mongoose.model('User', UserSchema);
