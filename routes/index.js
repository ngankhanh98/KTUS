var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var vm={

        isLogin: req.session.isLogin,

        name:req.session.name,
        avatar:req.session.avatar,
        post:true

    };

    res.render('index',vm);
});

router.post('/', function(req, res, next) {

    console.log(req.body);
    res.render('index');
});

module.exports = router;



