var express = require('express');
var router = express.Router();
var account=require('../controllers/user')

/* GET users listing. */
router.get('/signin',account.getSignIn);
router.post('/signin',account.signIn);


module.exports = router;
