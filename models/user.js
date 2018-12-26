var db=require('../db/db.js');
var bcrypt=require('bcrypt-nodejs');


module.exports.create_table=()=>{
    var model="id_user int AUTO_INCREMENT not null primary key, " +
        "name varchar(100), " +
        "password varchar(60), "+
        "avatar varchar (100), "+
        "id_role int, "+
        "FOREIGN KEY (id_role) REFERENCES role(id_role) ";
    db.load('create table if not exists user ( '+model+')');
}

// login

module.exports.signIn= async (req, res)=> {



    let sql="select name,id_user,id_role,avatar,password "+
        "from user "+
        "where name = '"+req.body.email+"'";

    db.load(sql,res).then( (result)=>{
        if(result.length>0)
        {
            if(bcrypt.compareSync(req.body.password,result[0].password)) {
                req.session.name =result[0].name;
                req.session.id_role =result[0].id_role;
                req.session.avatar =result[0].avatar;
                req.session.isLogin = true;

                res.redirect('/');
            }
            else
            {
                res.send("fail ");
            }

        }

    });

};

//signup

module.exports.signUp=(req,res)=>
{
    let hash_pass=bcrypt.hashSync(req.body.password);

    var sql = "insert into user(name,password,id_role) values(N'"+req.body.email+"',N'"+hash_pass+"',2)";
    db.load(sql,res).then((rows) =>
        {
            res.redirect('/');
        }
    );
}