const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();
/*.min(3, "mot de passe trop petit")
  .digits(1, "le mot de passe doit comporter au moins un  chiffre")
  .uppercase(1, "le mot de passe doit comporter au moins une majuscule");*/

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
    return res.status(400).json({
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
