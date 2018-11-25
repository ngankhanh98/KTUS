var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_role int AUTO_INCREMENT not null primary key," +
        "name varchar(30)";
    db.load('create table if not exists role ( '+model+')');
}
