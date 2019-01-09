var ad=require('../models/admin');
var admin={
    getDashboard:async(req,res)=>{
        if(req.session.id_role===1)
        {
            
            let info={
                isLogin:req.session.isLogin,
                name: req.session.name,
                avatar:req.session.avatar,
                
                
            }
            
            res.render('admindashboard',info);
            
        }
        else
        {
            res.render('error',{message:"Not allow"});
        }

    },
    getDashboard_user:async(req,res)=>{
        if(req.session.id_role===1)
        {
            let userlist=await ad.getUser();
            let info={
                isLogin:req.session.isLogin,
                name: req.session.name,
                avatar:req.session.avatar,
                user:userlist,
            }
            console.log(info);
            res.render('admindashboard-users',info);
        }
        else
        {
            
            
            res.render('error',{message:"Not allow"});
        }

    },
    getDashboard_post:async(req,res)=>{

        if(req.session.id_role===1)
        {
            let info={
                isLogin:req.session.isLogin,
                name: req.session.name,
                avatar:req.session.avatar
            }
            res.render('admindashboard-posts',info);
        }
        else
        {
            res.render('error',{message:"Not allow"});
        }

    },
};
module.exports=admin;