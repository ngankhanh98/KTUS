var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
    var vm={

        isLogin: req.session.isLogin,
        user: req.session.user
    };

    res.render('index',vm);
});

module.exports = router;



