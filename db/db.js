var mysql = require('mysql');
var Promise = require('promise');
var host=require('./config')

var cn = mysql.createConnection({
    host: host.host.host,
    port:host.host.port,
    user: host.host.user,
    password: host.host.password,
    database: host.host.database
});

cn.connect();

exports.load = (sql) => {

    if(cn.state === 'disconnected'){
        cn.connect();
      }

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