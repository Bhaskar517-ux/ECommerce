var sql=require('./db');
var ordetail=function(){

};

Orderdetail.getAllOrderdetails = function (result) {
    sql.query("Select * from order_details", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('order_details : ', res);  
              result(null, res);
            }
        });   
    };

  
  
  module.exports= Order_detail;