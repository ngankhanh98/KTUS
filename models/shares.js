var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_shares int," +
        "id_post int, " +
        "FOREIGN KEY (id_shares) REFERENCES user(id_user), "+
        "FOREIGN KEY (id_post) REFERENCES post(id_post) ";
    db.load('create table if not exists shares ( '+model+')');
}
