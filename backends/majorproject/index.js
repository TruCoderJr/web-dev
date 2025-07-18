const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./models/listing");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

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
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("index.ejs", { allListings });
});

// Form to create new listing
app.get("/listings/new", (req, res) => {
  res.render("new.ejs");
});

// Create new listing
app.post("/listings/new", async (req, res) => {
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

  try {
    await newListing.save();
    res.redirect("/listings");
  } catch (e) {
    console.log("Error:", e);
    res.status(500).send("Error creating listing");
  }
});

// Edit form
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const details = await Listing.findById(id);
  res.render("edit.ejs", { details });
});

// Update listing
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, price, location, country } = req.body;

  const updated = await Listing.findByIdAndUpdate(
    id, {
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
});

app.post("/listings/:id", async(req,res)=>{
    let {id} = req.params;

    let d = await Listing.findByIdAndDelete(id);
    console.log(d);
    res.redirect("/listings")
});

// Show one listing
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const details = await Listing.findById(id);
  res.render("view.ejs", { details });
});

// Start server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
