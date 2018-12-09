var account=require('../models/user');
module.exports.getSignIn=(req,res)=>
{
    res.render('signin');
};
module.exports.signIn= async(req,res)=> {
    try {
        account.signIn(req,res);

    }
    catch (e) {
        {
            res.send(e);
        }


    }
}
