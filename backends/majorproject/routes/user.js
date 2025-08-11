const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const userController = require("../controllers/user");

router
  .route("/signup")
  .get(wrapAsync(userController.signupForm))
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(wrapAsync(userController.loginForm))
  .post(
    passport.authenticate("local", {
      failureRedirect: "/user/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.lagout);

module.exports = router;
