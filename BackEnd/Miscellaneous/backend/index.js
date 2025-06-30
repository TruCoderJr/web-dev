const express = require("express");
const app = express();

const port = 3000;

app.get("/register", (req,res) =>{
    res.send("standard get response");
});

app.post("/register", (req, res) =>{
    res.send("standard post response");
})


app.listen(port, () =>{
    console.log(`port is listening ${port}`);
});

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }