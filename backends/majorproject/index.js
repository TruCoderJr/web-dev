const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const app = express();
const listings = require("./routes/listing");
const reviews = require("./routes/review.js");
const session = require("express-session");
const flash = require("connect-flash");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));


app.engine("ejs", engine);
const sessionOption = {
  secret: "mysuoersecret",
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now() + 7 * 24* 60* 60 * 1000,
    maxAge: 7 * 24* 60* 60 * 1000,
    httpOnly: true
  }
}

// DB connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/apnahome");
  console.log("Database connected");
}
main().catch((err) => console.log(err));



app.use(session(sessionOption));
app.use(flash());

app.use((req, res, next) => {
  // console.log("Request path:", req.path);
  // console.log("Method:", req.method);
  // console.log("Raw body:", req.body);
  res.locals.sussMsg = req.flash("success")[0];
  res.locals.error = req.flash("error")[0];
  next();
});

app.use("/listings/:id/reviews", reviews);
app.use("/listings", listings);


// Root route
app.get("/", (req, res) => {
  res.send("This is root");
});

// app.all("*", (req, res, next) => {
//   let newErr = new ExpressError(404, "Page not found");
//   next(newErr);
// });

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong!" } = err;
  // res.status(status).send(message);
  res.status(status).render("listings/error", {
    layout: "layouts/biolerplate",
    title: "Edit Listing",
    message,
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
