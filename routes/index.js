var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


    res.render('index',{isLogin:req.session.isLogin,name:req.session.name,avatar:req.session.avatar});

});



module.exports = router;



