
var home={
    getIndex:(req,res)=>{
        let info={
            isLogin:req.session.isLogin,
            name: req.session.name,
            avatar:req.session.avatar
        }
        res.render('index',info);
    }
}
module.exports=home