'use strict';

const fs = require('fs'),
  path = require('path');

const filesHelper = require('../../services/filesHelper');

function LocalFiles(options) {
  this.options = options;

  this.getUrl = this.getUrl.bind(this);
  this.save = this.save.bind(this);
}

LocalFiles.prototype.getUrl = function (file) {
  return path.resolve(this.options.dir + '/' + file._id);
};

LocalFiles.prototype.save = function (options, callback) {
  let file = options.file,
    folder = options.folder || 'files',
    fileFolder = filesHelper.prepareDir('uploads/' + folder + '/'),
    filePath = fileFolder + '/' + encodeURIComponent(file.filename) + path.extname(file.originalname),
    newPath = this.options.dir + '/' + folder + '/' + filePath;

  this.copyFile(file.path, newPath, function (err) {
    if (err) {
      return callback(err);
    }

    // Let the clients know about the new file
    let url = folder + '/' + filePath;
    callback(null, url);
  });
};

LocalFiles.prototype.copyFile = function (path, newPath, callback) {
  fs.readFile(path, function (err, data) {
    if (err) {
      return callback(err);
    }

    fs.writeFile(newPath, data, function (err) {
      callback(err);
    });
  });
};

module.exports = LocalFiles;
