const { listingSchema } = require("./schema");


module.exports.saveReturnTo = (req, res, next) => {
  if (
    !req.isAuthenticated() &&
    req.method === "GET" &&
    req.originalUrl !== "/user/login"
  ) {
    req.session.returnTo = req.originalUrl;
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl; // store the page they wanted
    return res.redirect("/user/login");
  }
  next();
};
