var express = require('express');
var router = express.Router();
var control=require('../controllers/image_upload')

router.post('/',control.upload);

module.exports = router;