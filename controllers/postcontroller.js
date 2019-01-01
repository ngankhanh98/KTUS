
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

        res.render('post',{isLogin:req.session.isLogin,
            name:req.session.name,
            avatar:req.session.avatar,
            title:result.title,
            content:result.content,
            time:result.time
        });
    },
    searchTitle: async (req,res)=>{
        let result=await post.searchTitle(req.params.title);
        let tempt;
        if(result===-1)
        {
            tempt={
                status:-1,
                message:'query error'
            }
        }
        else{
            result===0?tempt={
                    status:0,
                    message:'Not found any post'
                }
            :tempt={
                status:1,
                data:result
            }
        }
        console.log(tempt);
        res.send(tempt);

    },

}

module.exports=postController;