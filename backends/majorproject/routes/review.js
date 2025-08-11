const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../schema");
const reviewController = require("../controllers/review");

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  console.log("req body:", req.body);

  if (error) {
    console.log(error);
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

// add review
router.post("/", validateReview, wrapAsync(reviewController.addReview));

// delete review
router.delete("/:rewId", wrapAsync(reviewController.destroyReview));

module.exports = router;
