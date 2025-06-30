const express = require("express");
const app = express();

let port = 8080;

let arr = [1,34,7,32];
app.get('/', (req, res) =>{
    res.send("hii")
});

app.get("/data", (req, res) =>{
    res.send(arr);
});

app.post("/data/:n", (req, res) =>{
    let num = parseInt(req.params.n);
    arr.push(num);
    res.send(arr);
});

app.listen(port, ()=>{
    console.log("app is listesn");
    
})