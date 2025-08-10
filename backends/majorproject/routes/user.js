const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const passport = require("passport");

router.get(
  "/signup",
  wrapAsync(async (req, res) => {
    res.render("users/signup", {
      layout: "layouts/biolerplate",
      title: "Sign Up",
    });
  })
);

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { email, username, password } = req.body;

      let newUser = new User({ email, username });

      let reg = await User.register(newUser, password);
      // await newUser.save();
      console.log(reg);
      req.flash("success", "Welcome to FeelLikeHome");

      res.redirect("/listings");
    } catch (error) {
      req.flash("error", error.message);
      console.log(error);

      res.redirect("/user/signup");
    }
  })
);

router.get(
  "/login",
  wrapAsync(async (req, res) => {
    res.render("users/login", {
      layout: "layouts/biolerplate",
      title: "Login",
    });
  })
);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/user/login",
    failureFlash: true,
  }),
  wrapAsync(async (req, res) => {
    req.flash("success", "Welcome to FeelLikeHome");
    res.redirect("/listings");
  })
);

module.exports = router;
