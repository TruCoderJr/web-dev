const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listing");
const engine = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

app.engine("ejs", engine);

// DB connection
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/apnahome");
  console.log("Database connected");
}
main().catch((err) => console.log(err));

// Root route
app.get("/", (req, res) => {
  res.send("This is root");
});

// Show all listings
app.get(
  "/listings",
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
app.get("/listings/new", (req, res) => {
  res.render("listings/new", {
    layout: "layouts/biolerplate",
    title: "Add New Listing",
  });
});

// Create new listing
app.post(
  "/listings/new",
  wrapAsync(async (req, res) => {
    const { title, description, image, price, location, country } = req.body;
    const newListing = new Listing({
      title,
      description,
      image: {
        filename: "listingimage",
        url: image,
      },
      price,
      location,
      country,
    });

    await newListing.save();
    res.redirect("/listings");
  })
);
// Edit form
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    res.render("listings/edit", {
      layout: "layouts/biolerplate",
      title: "Edit Listing",
      details,
    });
  })
);

// Update listing
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { title, description, image, price, location, country } = req.body;

    const updated = await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image: {
          filename: "listingimage",
          url: image,
        },
        price,
        location,
        country,
      },
      { new: true }
    );

    res.redirect(`/listings`);
  })
);

app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deleted = await Listing.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect("/listings");
  })
);

// Show one listing
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const details = await Listing.findById(id);
    res.render("listings/view", {
      layout: "layouts/biolerplate",
      title: details.title,
      details,
    });
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong!" } = err;
  res.status(status).send(message);
});

// Start server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
