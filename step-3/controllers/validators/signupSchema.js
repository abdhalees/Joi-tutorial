const Joi = require('joi');

module.exports = {
  username: Joi.string().alphanum().required(),
  password: Joi.string().min(4).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(13).allow('').optional(),
  birthdate: Joi.date().max('1-1-2004').allow('').optional(),
  firstLang: Joi.string().valid(['ar', 'en']).allow('').optional(),
  availablity: Joi.boolean().optional()
};
