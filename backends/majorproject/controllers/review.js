const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.addReview = async (req, res) => {
  const listing = await Listing.findById(req.params.id); // ✅ await used properly

  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  const newReview = new Review(req.body.review); // ✅ create new review
  await newReview.save(); // ✅ save review first

  listing.review.push(newReview); // ✅ push to the listing's review array
  await listing.save(); // ✅ save listing after pushing review

  req.flash("success", "New review is added succesfully!!");
  res.redirect(`/listings/${listing._id}`); // ✅ redirect to view page
};

module.exports.destroyReview = async (req, res) => {
  let { id, rewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { review: rewId } });
  await Review.findByIdAndDelete(rewId);
  req.flash("success", "Review is deleted succesfully!!");
  res.redirect(`/listings/${id}`);
};
