const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema");
const listingController = require("../controllers/listings");
const { validateListing, saveReturnTo, isLoggedIn } = require("../middleware");
const multer  = require('multer')
const {storage} = require("../cloudConfig")

const upload = multer({ storage })


// Form to create new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Edit Form
router.get("/:id/edit", wrapAsync(listingController.renderEditForm));

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing)
  );
  // .post(upload.single('listing[image]'), (req, res)=>{
  //   res.send(req.file)
  // })

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(validateListing, wrapAsync(listingController.updateListing))
  .delete(wrapAsync(listingController.destroyListing));
  
module.exports = router;
