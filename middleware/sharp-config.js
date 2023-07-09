const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

//compression de l'image, format webP
const GreenCode = (req, res, next) => {
  if (req.file) {
    sharp(req.file.buffer)
      .webp({ quality: 30 })
      .toBuffer((error, buffer) => {
        if (error) {
          return next(error);
        }
        //on élimine les espaces avant de les remplacer par des underscore
        const oldFileName = path
          .parse(req.file.originalname)
          .name.split(" ")
          .join("_");
        const timestamp = Date.now();
        const newFilename = `${oldFileName}_${timestamp}.webp`;
        req.file.filename = newFilename;
        const savePath = path.join(__dirname, "..", "images", newFilename);
        fs.writeFile(savePath, buffer, (error) => {
          if (error) {
            return next(error);
          }
          next();
        });
      });
  } else {
    next();
  }
};

module.exports = GreenCode;
