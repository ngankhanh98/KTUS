var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('post',req.session);
});

module.exports = router;