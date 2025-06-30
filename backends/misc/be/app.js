const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (from forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    console.log("GET Request Query:", req.query);
    res.send(`Standard get request, Welcome ${user}`);
});


app.post("/register", (req, res) => {
    let { user, pass } = req.body;
    console.log("POST Request Body:", req.body);
    res.send(`Standard post request, Welcome ${user}`);
});

app.listen(port, () => {
    console.log("app is listening");
});
