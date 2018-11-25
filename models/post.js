var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_post int AUTO_INCREMENT not null primary key," +
        "content varchar(4000), " +
        "title varchar(100), "+
        " isTrending boolean, "+
        "isTop boolean, "+
        "score int, "+
        "slug varchar(150), "+
        "id_topic int, "+
        "FOREIGN KEY (id_topic) REFERENCES topic(id_topic) ";
    db.load('create table if not exists post ( '+model+')');
}
