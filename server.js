const express = require('express');
var path=require('path');
var cors=require('cors')
var app = express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
var routes = require('./router/router'); 
routes(app);  

/*var onListen=function(){
    console.log("server is listening on port ")
}*/
app.listen(3000,()=>{
console.log("Server is listening on port 3000")
});