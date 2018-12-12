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
