const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema");
const Listing = require("../models/listing");
// const flash = require("connect-flash");

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

// Show all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", {
      layout: "layouts/biolerplate",
      title: "All Listings",
      allListings,
    });
  })
);

// Form to create new listing
router.get("/new", (req, res) => {
  res.render("listings/new", {
    layout: "layouts/biolerplate",
    title: "Add New Listing",
  });
});

// Create new listing
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const data = {
      ...req.body.listing,
      image: {
        url: req.body.listing.image,
        filename: "listingimage",
      },
    };

    const newListing = new Listing(data);

    await newListing.save();
    req.flash("success", "New listing is added succesfully!!");
    res.redirect("/listings");
  })
);
// Edit form
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    if (!details) {
      req.flash("error", "Listing does not exits.!!");
      res.redirect("/listings");
    } else {
      res.render("listings/edit", {
        layout: "layouts/biolerplate",
        title: "Edit Listing",
        details,
      });
    }
  })
);

// Update listing
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const data = {
      ...req.body.listing,
      image: {
        url: req.body.listing.image,
        filename: "listingimage",
      },
    };

    const updated = await Listing.findByIdAndUpdate(id, { ...data });

    req.flash("success", "Listing is updated succesfully!!");
    res.redirect(`/listings/${id}`);
  })
);

router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deleted = await Listing.findByIdAndDelete(id);
    console.log(deleted);

    req.flash("success", "Listing is deleted succesfully!!");
    res.redirect("/listings");
  })
);

// Show one listing
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id).populate("review");
    if (!details) {
      req.flash("error", "Listing does not exits.!!");
      res.redirect("/listings");
    } else {
      res.render("listings/view", {
        layout: "layouts/biolerplate",
        title: details.title,
        details,
      });
    }
  })
);

module.exports = router;
