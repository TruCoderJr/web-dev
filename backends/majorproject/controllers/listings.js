const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", {
    layout: "layouts/biolerplate",
    title: "All Listings",
    allListings,
  });
};

module.exports.renderNewForm = (req, res) => {
  console.log("You made it to the add new page!");

  res.render("listings/new", {
    layout: "layouts/biolerplate",
    title: "Add New Listing",
  });
};

module.exports.createListing = async (req, res, next) => {
  const url = req.file.path;
  const filename = req.file.filename;

  const data = {
    ...req.body.listing,
    image: {
      url,
      filename
    },
  };

  const newListing = new Listing(data);

  await newListing.save();
  req.flash("success", "New listing is added succesfully!!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
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
};

module.exports.updateListing = async (req, res) => {
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
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  const deleted = await Listing.findByIdAndDelete(id);
  console.log(deleted);

  req.flash("success", "Listing is deleted succesfully!!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
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
};
