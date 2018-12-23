var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_likes int, " +
        "id_post int, " +
        "time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, "+
        "FOREIGN KEY (id_likes) REFERENCES user(id_user), "+
        "FOREIGN KEY (id_post) REFERENCES post(id_post) ";
    db.load('create table if not exists likes ( '+model+')');
}
