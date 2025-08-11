if (process.env.NODE_ENV != "producrion") {
  require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const app = express();

const listingsRouter = require("./routes/listing");
const reviewsRouter = require("./routes/review.js");
const usersRouter = require("./routes/user.js");

const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


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
app.use(passport.initialize());
app.use(passport.session()); // <-- This keeps the user logged in

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  // console.log("Request path:", req.path);
  // console.log("Method:", req.method);
  // console.log("Raw body:", req.body);
  res.locals.sussMsg = req.flash("success")[0];
  res.locals.error = req.flash("error")[0];
  res.locals.isLogin = req.isAuthenticated(); // <-- Added this
  res.locals.currentUser = req.user; 
  next();
});

app.use("/listings/:id/reviews", reviewsRouter);
app.use("/listings", listingsRouter);
app.use("/user", usersRouter);

// Root route
app.get("/", (req, res) => {
  res.redirect("/user/login")
});


// app.all("*", (req, res, next) => {
//   let newErr = new ExpressError(404, "Page not found");
//   next(newErr);
// });

app.use((err, req, res, next) => {
  console.log(err);
  
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
