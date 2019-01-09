
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
        let result=await post.searchTitle(req.body.title);
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
    //get search
    getSearchTitle: async (req,res)=>{
        let result=await post.getSearchTitle(req.params.title);
        let id=[],title=[],time=[],tempt,content=[],topic=[];

        for (i=0;i<result.length;i++)
        {
            
            id.push(result[i].id_post);
            title.push(result[i].title);
            //covert html to plain text
            tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
            content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription            
        };
        let info={
            isLogin:req.session.isLogin,
            name: req.session.name,
            avatar:req.session.avatar,
            id:id,
            title: title,
            dicription:content

        }
        res.render('search',info);

    },


}

module.exports=postController;