const express = require('express');
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    // res.send("This is home")
    res.render("home");
});

app.get("/rolldice",(req, res)=>{
    // res.send("This is home")
    let n = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice", {val:n});
});

app.listen(port, ()=>{
    console.log("app is listening");
});