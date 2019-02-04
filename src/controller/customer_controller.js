var unirest = require('unirest');
var mysql = require('mysql')


module.exports = {

    getallcustomers: function (req, callback) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'customers'
        });

        connection.connect()
        try {
            connection.query('SELECT * from customers.customer_details', function (err, rows, fields) {
                if (err) throw err
                callback(null, {status:'success',data:rows});
                connection.end()
            })
        } catch (e) {
            callback(null, {
                status: 'error',
                e: e
            })
            connection.end()
        }


    },
    postcustomerdata: function (req, callback) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'customers'
        });

        connection.connect()
        try {
            connection.query('INSERT INTO customers.customer_details SET ?', req, function (err, rows, fields) {
                if (err) throw err
                callback(null, rows);
                connection.end()
            })
        } catch (e) {
            callback(null, {
                status: 'error',
                e: e
            })
            connection.end()
        }


    },
}