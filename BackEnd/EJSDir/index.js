const express = require("express");
const app = express();

const path = require("path");

app.set("views", path.join(__dirname, "/views"))

let port = 8080;

app.set("view engine", "ejs")

app.get("/home", (req, rep) =>{ś
    rep.render("home.ejs")
});

app.get("/rolldice", (req, res) =>{
   let dv =  Math.floor(Math.random() * 6) +1; 
    res.render("dice.ejs", {num: dv});

});

// app.get("/ig/:username",(req, res) => {
//     let {username} = req.params;
//     // let followers = ["bob","ram", "roy", "rohan"]
//     res.render("ig.ejs", {username, followers});
// })

app.listen(port, () => {
    console.log(`Port is listening ${port}`);
});

// l9
// app.get("/ig/:username",(req, res) => {
//     let { username } = req.params;

//     const instaData = require("./data.json");
//     console.log(instaData);
//     const userData = instaData[username];
//     console.log(userData);
    
//     res.render("ig.ejs",{userData});
// })

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;             // Extracts 'username' from the URL.
    const instaData = require("./data.json");
    console.log(instaData);                   // Logs the entire data from data.json
    const userData = instaData[username];    // Retrieves the data for the specific user.
    if (userData) {
        res.render("ig.ejs", { userData });     // Renders the data into the 'ig.ejs' template.
    }else{
        res.render("error.ejs");
    }
});


