var mysql = require('mysql');
var Promise = require('promise');


exports.load = (sql) => {
    return new Promise((resolve, reject) =>
    {
        var cn = mysql.createConnection({
            host: 'db4free.net',
            port: 3306,
            user: 'kitus_team',
            password: '22121996',
            database: 'kitus_team'
        });

        cn.connect();
        cn.query(sql, function(error, rows, fields) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
            	resolve(rows);
            }
        });
    });
}