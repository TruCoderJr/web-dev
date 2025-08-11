const User = require("../models/user");

module.exports.signupForm = async (req, res) => {
  res.render("users/signup", {
    layout: "layouts/biolerplate",
    title: "Sign Up",
  });
};

module.exports.signup = async (req, res) => {
  try {
    let { email, username, password } = req.body;

    let newUser = new User({ email, username });

    let reg = await User.register(newUser, password);
    // await newUser.save();
    console.log(reg);
    req.flash(
      "success",
      "Congratulations, your account has been successfully created, you can login"
    );

    res.redirect("/user/login");
  } catch (error) {
    req.flash("error", error.message);
    console.log(error);

    res.redirect("/user/signup");
  }
};

module.exports.loginForm = async (req, res) => {
  res.render("users/login", {
    layout: "layouts/biolerplate",
    title: "Login",
  });
};

// module.exports.login = (req, res) => {
//   res.redirect("/listings");
// };

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome to FeelLikeHome");

  const redirectUrl = req.session.returnTo || "/listings";
  delete req.session.returnTo;

  res.redirect(redirectUrl);
};







module.exports.lagout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You have logged out successfully");
    res.redirect("/listings");
  });
};
