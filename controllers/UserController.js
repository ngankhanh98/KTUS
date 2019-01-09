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
        req.session.id_role=result.id_role;
        console.log(req.session.id_role);
        if(req.session.id_role===1)
         res.redirect('/dashboard');//admin
        else
          res.redirect('/');//user
         
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