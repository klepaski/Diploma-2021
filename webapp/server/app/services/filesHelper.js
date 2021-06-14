const fs = require('fs');
const https = require('https');
const resizeImg = require('resize-img');
const sizeOf = require('image-size');
const errorMessages = require('./errorMessages');
const AppError = require('./error');

FilesHelper = {
  /**
   * Подготовка директории для сохранения файла
   *
   * Структура файловой системы:
   * 2014 (год)
   *      03 (месяц)
   *          21 (день)
   *
   * Если нужных директорий нету - создаются
   *
   * @return {string} Путь для сохранения файла
   */
  prepareDir: function (parentDir) {
    const date = new Date();

    const year = date.getFullYear().toString();
    const month = this.addZero(date.getMonth() + 1).toString();
    const day = this.addZero(date.getDate()).toString();

    let path = parentDir;

    path = this.createDir(path, year);
    path = this.createDir(path, month);
    path = this.createDir(path, day);

    path = path.replace(parentDir + '/', '');

    return path;
  },

  /**
   * Создает директорию, если она не существует
   * @param {string} path Корневая директория
   * @param {string} dirname Создаваемая директория
   * @return {string} Путь к созданной директории
   */
  createDir: function (path, dirname) {
    const dir = fs.readdirSync(path);
    if (dir.indexOf(dirname) == -1) {
      fs.mkdirSync(path + '/' + dirname);
    }
    return path = path + '/' + dirname;
  },

  addZero: function (i) {
    return (i < 10) ? "0" + i : i;
  },


  savePhoto: function (file, folder) {
    const fileFolder = this.prepareDir('uploads/' + folder + '/'),
      filePath = fileFolder + '/' + encodeURIComponent(file.filename) + '.png',//path.extname(file.originalname),
      newPath = 'uploads/' + folder + '/' + filePath;

    return new Promise((resolve, reject) => fs.readFile(file.path, (err, data) => {
      if (err) reject(err);
      resolve(data)
    }))
      .then(data => {
        if (!data.length) throw new AppError({
          status: 400,
          message: errorMessages.EMPTY_PHOTO,
          err: file
        });

        const dimensions = sizeOf(data);
        const max = dimensions.width > dimensions.height ? dimensions.width : dimensions.height;

        if ((max > 3900) || (data.length > 4 * 1024 * 1024)) {
          const scale = 1500 / max;
          console.log('w * scale, h * scale: ', dimensions.width * scale, dimensions.height * scale);
          const param = {
            width: Math.round(dimensions.width * scale),
            height: Math.round(dimensions.height * scale)
          };
          console.log('param', param);

          return resizeImg(data, param)
        }

        return data
      })
      .then(data => {
        if (!data.length) throw new AppError({
          status: 400,
          message: errorMessages.EMPTY_PHOTO,
          err: file
        });
        return data
      })
      .then(data => new Promise((resolve, reject) => fs.writeFile(newPath, data, err => {
        if (err) reject(err);
        resolve({data: data, path: (folder + '/' + filePath), folder: folder})
      })))
      .catch(err => {
        if (!(err instanceof AppError)) throw new AppError({
          status: 500,
          message: errorMessages.SERVER_ERROR,
          err: err
        });
        throw err
      })
  },


  copyPhoto: function (url, folder) {
    const fileFolder = this.prepareDir('uploads/' + folder + '/'),
      filePath = fileFolder + '/' + url.substr(22, 19) + Date.now() + '.png',
      newPath = 'uploads/' + folder + '/' + filePath;

    return new Promise((resolve,reject) => {
      const rd = fs.createReadStream('uploads/' + url );
      rd.on('error', err => reject(err));
      const wr = fs.createWriteStream(newPath);
      wr.on('error', err => reject(err));
      wr.on('close', () => resolve(folder + '/' + filePath));
      rd.pipe(wr);
    });

  },


  copyPhotoSocialNetwork: function (url, folder) {
    const fileFolder = this.prepareDir('uploads/' + folder + '/'),
      filePath = fileFolder + '/' + url.substr(12, 19) + Date.now() + '.png',
      newPath = 'uploads/' + folder + '/' + filePath;

    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(newPath);
      const request = https.get(url, function(response) {
        response.pipe(file)
          .on('error', err => reject(err))
          .on('close', () => resolve(folder + '/' + filePath));
      });
    });
  },


  deletePhoto: function (url) {
    const newPath = 'uploads/' + url;

    return new Promise((resolve, reject) => fs.unlink(newPath, (err, data) => {
      if (err) reject(err);
      resolve(data)
    }))
      .catch(err => {
        if (!(err instanceof AppError)) throw new AppError({
          status: 500,
          message: errorMessages.SERVER_ERROR,
          err: err
        });
        throw err
      })
  }

};

module.exports = FilesHelper;
