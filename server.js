var express = require('express');

var cors=require('cors')
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
var routes = require('./router/router'); //importing route
routes(app);  // register route

var onListen=function(){
    console.log("server is listening on port ")
}
app.listen(3000,onListen);
console.log("Server is listening on port 3000");
