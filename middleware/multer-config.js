const multer = require("multer");

//multer facilite la gestion des fichiers envoyés avec des requêtes http vers l'API
const fileFilter = function (req, file, callback) {
  const fileSupported = ["image/jpeg", "image/jpg", "image/png"];
  if (!fileSupported.includes(file.mimetype)) {
    const error = new Error("format d'image non supporté");
    error.code = "LIMIT_FILE_TYPES";
    return callback(error, false);
  }
  callback(null, true);
};

const storage = multer.memoryStorage();

const upload = multer({ storage: storage, fileFilter: fileFilter });

//un fichier unique qui est une image
module.exports = upload.single("image");
