// database connectivity
var mysql= require('mysql');

//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql123',
    database:'Ecommerces'
});

connection.connect(function(err){
    if(err) throw err;

});

module.exports=connection;
