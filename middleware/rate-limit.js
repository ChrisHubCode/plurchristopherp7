const rateLimit = require("express-rate-limit");

//limitation du nombre de requête (sign up) sur un temps donné
module.exports = rateLimit({
  windowMs: 1 * 60 * 1000, //fenêtres de 1 mn
  max: 10, // limite chaque IP à 10 requêtes par fenêtres
  handler: function (req, res, next) {
    return res.status(429).json({
      error: "Trop de requêtes. Veuillez réessayer plus tard.",
    });
  },
});
