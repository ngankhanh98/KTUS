var express = require('express');
var router = express.Router();
var post=require('../controllers/post')
router.get('/', post.getPost);

module.exports = router;