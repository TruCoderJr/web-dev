const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require('connect-flash');
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(session({secret: "mybiggestsecret", resave: false, saveUninitialized: true}));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.sussMsg =  req.flash("success")[0];
    res.locals.errMsg =  req.flash("error")[0];
    next();
})

app.get("/test", (req, res)=>{
    res.send("Test Succesfull")
})

app.get("/register", (req,res)=>{
    let {name = "anonamus"} = req.query;

    if (name == "anonamus") {
        req.flash("error", `User not registered!`);
    }else{
        req.flash("success", `User ${name} registered successfully!`);
    }

    req.session.name = name;
    
    res.redirect("/hello")
})

app.get("/hello", (req, res)=>{
    res.render("index.ejs", {name: req.session.name, });
})

app.get("/reqCount", (req, res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send(`You sent request ${req.session.count} times`);
})

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.use("/users", users);
app.use("/posts", posts)

app.listen(8000, ()=>{
    console.log("Server is running");  
})