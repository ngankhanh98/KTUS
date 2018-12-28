var post=require('../models/post');

module.exports.post=post.new_post;
module.exports.getform=(req,res)=>
{
    if(req.session.isLogin==undefined||req.session.isLogin===false)
    {

        res.render('error',{message: "You Must Login Before Access Create A New Post",isLogin:false});
        res.end();


    }
    else
    {
        res.render('new-post',{name:req.session.name,avatar:req.session.avatar});
        res.end();
    }
}

module.exports.getPost=post.getPost