var db=require('../db/db.js');
var bcrypt=require('bcrypt-nodejs');



// login
var login={
    signin:(req, res)=>
    {

console.log(req.body.email);

        let sql="select name,id_user,id_role,avatar,password "+
            "from user "+
            "where name = '"+req.body.email+"'";
      db.load(sql).then( (result)=>{
            if(result.length>0)
            {
                if(bcrypt.compareSync(req.body.password,result[0].password)) {
                        req.session.name = result[0].name,
                        req.session.id_role = result[0].id_role,
                        req.session.avatar = result[0].avatar,
                        req.session.isLogin = true;
                    res.redirect('/');
                }



            }

        });




    },
    signUp:(req,res)=>
    {
        let hash_pass=bcrypt.hashSync(req.body.password);

        var sql = "insert into user(name,password,id_role) values(N'"+req.body.email+"',N'"+hash_pass+"',2)";
        db.load(sql).then((rows) =>
            {
                res.redirect('/');
            }
        );
    }
}
module.exports=login;

