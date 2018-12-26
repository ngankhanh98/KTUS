var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var vm={

        isLogin: req.session.isLogin,
        name:req.session.name,
        avatar:req.session.avatar
    };

    res.render('index',vm);
});

module.exports = router;



