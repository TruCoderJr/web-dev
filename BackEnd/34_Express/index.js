const express = require("express");
const app = express();

let port = 8080;

// console.dir(app);

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) =>{
//     console.log("request recived");
    // res.send("This is a response");
    // res.send({
    //     name:"apple",
    //     color: "red"
    // })
    // , Batman, , Aquaman, and 
    // let code = "<h1>DCU</h1> <ul>  <li>Batman</li> <li>Wonder Woman</li> <li>Flash</li> <li>Aquaman</li> <li>Superman</li> </ul>";
    // res.send(code);
// });

app.get("/:websiteName/:id", (req, res) =>{
    let {websiteName, id} = req.params;
    res.send(`Hii, welcom to ${websiteName}`)
});

app.get('/', (req, res) =>{
    
    res.send("hello, This is homepage");
});
app.get("/home", (req, res) =>{
    res.send("This is homepage");
});



app.get("/contact",(req, res) => {
    res.send("This is about contact, this is my email");
});

app.get("/about",(req, res) => {
    res.send("This is about page, i can help you");
});

app.post("/",(req, res) => {
    res.send("you send a post request to root");
} );

app.get("/*",(req, res) => {
    res.send("This path does not exit");
});
