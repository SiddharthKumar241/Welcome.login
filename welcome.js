const express=require("express");
const app=express();
const path=require("path");
app.get("/login_get",(req,res)=>{
    let response={
        username:req.query.email,
        password:req.query.password
    };
    let username1="hello";
    let password1="hello";
    if((response.username==username1) && (response.password==password1)){
        console.log("Connection is Established");
    }
    else{console.log("Connection fails");}
    res.send("Your Data Is Saved");
    console.log(response);
});
app.listen(4000,()=>{
    console.log("Server Is Running On Node Server");
});
