// // const mysql = require('mysql');
// // const connection = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'user',
// //   password: 'password',
// //   database: 'database name'
// // });
// // connection.connect((err) => {
// //   if (err) throw err;
// //   console.log('Connected!');
// // });

// // var mysql = require('mysql');

// // var con = mysql.createConnection({
// //   host: "localhost",
// //   user: "roots", // WRONG USER
// //   password: ""
// // });

// // con.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
// //   /*Create a database named "mydb":*/
// //   con.query("CREATE DATABASE mydb", function (err, result) {
// //     if (err) throw err;
// //     console.log("Database created");
// //   });
  
// // });



// //////////////////////////////////////

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     database : 'student',
//     user     : 'pooja',
//     password : 'mysql@126',
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }

//     console.log('Connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM employee', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// connection.end();



var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : '',
    user     : 'root',
    password : 'root',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }else{
        console.log('Connected as id ' + connection.threadId);
    }

    
});

// connection.query('SELECT * FROM employee', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

connection.end();
