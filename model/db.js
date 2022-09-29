var mysql= require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql123',
    database:'ecommerces'
});

connection.connect(function(err){
    if(err) throw err;

});

module.exports=connection;