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
    res.json(response);
    console.log(response);
});
app.post("/register", (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    
    if (users[email]) {
        return res.status(400).json({ message: "User already exists" });
    }
    
    users[email] = password;
    console.log("User registered:", email);
    res.json({ message: "Registration successful" });
});

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"register.html"))
})
app.listen(4000,()=>{
    console.log("Server Is Running On Node Server");
});
