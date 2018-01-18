const express = require('express');
const router = express.Router();
const signup = require('./signup');
const validate = require('../middleware/validate');
const signupSchema = require('./validators/signupSchema');

router.get('/', signup.get);
router.post('/signup', validate(signupSchema), signup.post);

module.exports = router;
