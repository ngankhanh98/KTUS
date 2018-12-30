
var post=require('../models/post')

var postController={
    getNewPost:async (req,res)=>{
        if(req.session.isLogin)
        {
            res.render('new-post',{name:req.session.name,avatar:req.session.avatar});
        }
        else{
            res.render('error',{message:"Not Login"  });
        }
    },
    post:async(req,res)=>{
        console.log(req.body.title);
       
       let result=await post.newpost(req.session.id_user,req.body.title,req.body.content);
       let e;
       
       if(result=='-1')
       {
           e={status:-1,message:'server err!'}
       }
       else{
        e={status:1,message:result};

       }
       res.send(e);
        
    },
   
    getPost: async(req,res)=>
    {
        let result=await post.getPost(req.params.id);
        console.log(result);
        res.render('post',{isLogin:req.session.isLogin,
            name:req.session.name,
            avatar:req.session.avatar,
            title:result.title,
            content:result.content,
            time:result.time
        });
    }

}

module.exports=postController;