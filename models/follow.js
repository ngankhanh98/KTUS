var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_user int, " +
        "id_target int, " +
        "time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, "+
        "FOREIGN KEY (id_user) REFERENCES user(id_user), "+
        "FOREIGN KEY (id_target) REFERENCES user(id_user) ";
    db.load('create table if not exists follow ( '+model+')');
}
