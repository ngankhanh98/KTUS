var express = require('express');
var router = express.Router();
var control=require('../controllers/user');


/* GET users listing. */
//signup
router.get('/signup', control.getSignUp);
router.post('/signup', control.signUp);

//signin
router.get('/signin', control.getSignIn);
router.post('/signin', control.signIn);

module.exports = router;