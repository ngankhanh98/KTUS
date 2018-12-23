var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_post int AUTO_INCREMENT not null primary key," +
        "content varchar(4000), " +
        "title varchar(100), "+
        " isTrending boolean, "+
        "isTop boolean, "+
        "score int, "+
        "id_topic int, "+
        "id_user int, " +
        "time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, "+
        "FOREIGN KEY (id_user) REFERENCES user(id_user), "
        "FOREIGN KEY (id_topic) REFERENCES topic(id_topic) ";
    db.load('create table if not exists post ( '+model+')');
}

module.exports.new_post=(req,res)=>{

        let sql = "insert into post(content,title,id_topic,id_user) values(N'" + req.body.content + "',N'" + req.body.header + "',1, " + req.session.id_us + ")";

        db.load(sql).then((err, data) => {

            if (data) {

                res.redirect('/');
            }
            else {
                res.render('error',{message: "Undefined Error",isLogin:false});
            }
        })


}
