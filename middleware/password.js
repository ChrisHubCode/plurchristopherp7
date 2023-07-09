const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();
//le mot de passe doit contenir au moins 3 caractères, une majuscule et 1 chiffre

passwordSchema
  .is()
  .min(3)
  .has()
  .uppercase()
  .has()
  .not()
  .spaces()
  .has()
  .digits(1);

module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(401).json({
      error:
        "le mot de passe n'est pas assez fort " +
        passwordSchema.validate(req.body.password, { details: true }),
    });
  }
};

/*module.exports = (req , res, next) =>{
  if(passwordschema.validate(req.body.password)){
        next()
  } else {
        return res.status(400).json({error : `le mot de passe n'est pas assez fort: ${passwordschema.validate('req.body.password' , { list: true })}`})
   }
}*/
