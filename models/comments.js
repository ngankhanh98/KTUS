var db = require('../db/db.js');
module.exports.create_table=() =>
{
    var model="id_user int," +
        "id_post int, " +
        "comment varchar(400), "+
        "time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, "+
        "FOREIGN KEY (id_user) REFERENCES user(id_user), "+
        "FOREIGN KEY (id_post) REFERENCES post(id_post) ";
    db.load('create table if not exists comments ( '+model+')');
}
