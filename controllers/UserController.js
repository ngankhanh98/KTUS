var user=require('../models/user');

var UserController={
  //login
    login:async (req,res)=>{
      let result =await user.login(req.body.email,req.body.password);
      
      if(result)
      {
        req.session.name = result.username,
        req.session.avatar = result.avatar,
        req.session.id_user = result.id_user,
        req.session.isLogin = true;
        console.log(result);
        res.redirect('/');
      }
      else{
        res.render('error',{message:false});
      }

    },

    getLogin:(req,res)=>{
     res.render('signin');
    },
//signup
    signup: async (req,res)=>{
      let result=await user.signUp(req.body.username,req.body.email,req.body.password);
      if (result===true)
      {
        res.redirect('/');
      }
      else{
        res.render('error',{message:"can't register"});
      }
    },
    getsignup: (req,res)=>{
      res.render('signup');
    },
    logout:(req,res)=>{
      req.session.isLogin=false;
      //req.session.name=null;
      //req.session.avatar=false;
      res.redirect('/');

    },

}

module.exports=UserController;