const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

const access = (req, res,next )=>{
    throw new ExpressError(403,"Access Denied");
}
// index route
app.get("/admin", access, (req, res) => {
  res.send("acces allowed");
});

app.use((error, req, res,next) => {
  let {status=501,msg="Some error occcer"} = error;
  res.status(status).send(msg);
});


app.listen(3000, () => {
  console.log("server is listenin on port 3000");
});
