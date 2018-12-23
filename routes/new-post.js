var express = require('express');
var router = express.Router();
var control=require('../controllers/post');

/* GET home page. */
router.get('/',control.getform);
router.post('/',control.post);

module.exports = router;
