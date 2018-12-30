var mysql = require('mysql');
var host=require('../config/host')

var cn = mysql.createPool({
    connectionLimit : 100,
    host: host.host,
    port:host.port,
    user: host.user,
    password: host.password,
    database: host.database

});

module.exports=cn;
