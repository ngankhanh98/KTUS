var user=require('../models/user');

//sign up
    //get
module.exports.getSignUp= (req,res)=>
{
    res.render('signup');
    res.end();
};
    //post
module.exports.signUp=user.signUp;


//sign in
    //get
module.exports.getSignIn= (req,res)=>
{
    res.render('signin');
    res.end();
}
    //post
module.exports.signIn=user.signin;

