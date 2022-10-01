
const express=require('express');
const expressSession=require('express-session');
const oneDay=1000 * 60* 60 * 24;


const app=express();

//HTTP middleware pipline configuration
//set session middleware configuration
var sessionMiddlware=expressSession({

    secret:'cart',
    saveUninitialized:true,
    cookie:{maxAge: oneDay},
    resave: false

})
app.use(sessionMiddlware);
//app.use(express.static('public));

//Http handler mapping
app.post("/api/cart",(req, res)=>{
    if (req.session.cart){
        req.send(req.session.cart);
        res.end();
    }   
     else{
        req.session.cart=[];
        res.send(req.session.cart);
        res.end();
    }
       // res.send("product lists");
        

});
 
app.post("/api/addtocart/:id",(req, res)=>{
    req.body
    let item={"productid":req.params.id,quantity:1};
    req.session.cart.push(item);
    res.send(req.session.cart);
    res.end();
});

app.get("/api/removefromcart",(req, res)=>{
    req.session.cart=req.session.cart.filter((data)=>(data.productid !=req.param.id))
          res.send(req.session.cart);
          res.end();
});

app.get("/api/checkout",(req, res)=>{
    req.session.destroy((err)=>{
        console.log("session is destroyed");
        res.send("session is destroyed is explicity");
        res.end();
    })
})

app.listen(5000);
console.log("Server is listening on port 5000");