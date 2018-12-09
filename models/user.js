var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_user int AUTO_INCREMENT not null primary key, " +
        "name varchar(100), " +
        "password varchar(16), "+
        "avatar varchar (100), "+
        "id_role int, "+
        "FOREIGN KEY (id_role) REFERENCES role(id_role) ";
    db.load('create table if not exists user ( '+model+')');
}

// login
module.exports.signIn= async (req, res)=> {

    var sql="select name,id_user,id_role,avatar "+
        "from user "+
        "where name = '"+req.body.username+"' " +
        "and password = '"+req.body.password+"'";

     db.load(sql).then( (result)=>{
        if(result.length>0)
        {
            req.session.user=result[0];

            req.session.isLogin=true;

            res.redirect('/');

        }
        else
        {
            res.send("fail ");
        }
    });

};