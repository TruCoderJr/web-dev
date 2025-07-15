const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override');

const app = express();  // Initialize app here

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
    console.log("This is root");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
