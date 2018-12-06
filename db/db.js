var mysql = require('mysql');
var Promise = require('promise');
var config=require('./host')
var cn = mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

cn.connect();

exports.load = (sql) => {
    return new Promise((resolve, reject) =>
    {

        cn.query(sql, function(error, rows)
        {
            if (error) {
                console.log(error);
                reject(error);
            } else {
            	resolve(rows);
            }
        });

    });
}