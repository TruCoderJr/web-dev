const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

let port = 8080;

app.set("views", path.join(__dirname, "/views"))

app.set("view engine", "ejs");
app.use(express.static('public'));  // Ensure the 'public' folder is where your style.css is located.

app.get("/home", (req, rep) =>{
    fs.readdir("files", (err, files) =>{
        if(err) console.log("error found!!",err);
        else console.log(files); rep.render("home.ejs", { files: files });
    })
    
});
let allFile = null;

app.get("/hissab/:fileName", (req, res) =>{
    let {fileName} = req.params;
    // res.send(fileName);
    fs.readFile(`files/${fileName}.txt`, "utf8",(err, data) => {
        if (err) console.log(err);
        else console.log(data);
         res.render("view.ejs", { data: data, fileName:fileName });
      });
})

app.listen(port,() =>{
    console.log("app is lisining",port);
})

