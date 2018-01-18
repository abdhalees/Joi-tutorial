const Joi = require('joi');
module.exports = schema => (req, res, next) => {
  const { body } = req;
  console.log(body);
  const validateStatus = Joi.validate(body, schema);
  if (validateStatus.error) {
    res.status(400).render('form', { err: validateStatus.error.details[0].message });
  } else next();
};
