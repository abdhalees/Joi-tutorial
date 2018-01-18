const express = require('express');
const router = express.Router();
const signup = require('./signup');

router.get('/', signup.get);
router.post('/signup', signup.post);

module.exports = router;
