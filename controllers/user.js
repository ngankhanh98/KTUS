var user=require('../models/user');

//sign up
    //get
module.exports.getSignUp= (req,res)=>
{
    res.render('signup');
};
    //post
module.exports.signUp=user.signUp;


//sign in
    //get
module.exports.getSignIn= (req,res)=>
{
    res.render('signin');
}
    //post
module.exports.signIn=user.signIn;

