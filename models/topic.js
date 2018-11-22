var db=require('../db/db.js')

module.exports.create_table=()=>{
    var model="id_topic int AUTO_INCREMENT not null primary key," +
        "name varchar (100)";
    db.load('create table if not exists topic ( '+model+')');
}
