const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../schema");
const Review = require("../models/review");
const Listing = require("../models/listing");



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

// review route
// add review
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id); // ✅ await used properly

    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }

    const newReview = new Review(req.body.review); // ✅ create new review
    await newReview.save(); // ✅ save review first

    listing.review.push(newReview); // ✅ push to the listing's review array
    await listing.save(); // ✅ save listing after pushing review
    
    req.flash("success", "New review is added succesfully!!")
    res.redirect(`/listings/${listing._id}`); // ✅ redirect to view page
  })
);

// delete review
router.delete(
  "/:rewId",
  wrapAsync(async (req, res) => {
    let { id, rewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { review: rewId } });
    await Review.findByIdAndDelete(rewId);
    req.flash("success", "Review is deleted succesfully!!")
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;