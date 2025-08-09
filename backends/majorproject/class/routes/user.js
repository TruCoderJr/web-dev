const express = require("express");
const router = express.Router();

router.get("/:id",(req,res)=>{
    res.send("This is a particuler user profile");
})
router.delete("/:id",(req,res)=>{
    res.send("Delete for new user");
})

router.get("/",(req,res)=>{
    res.send("This is all user page");
})

router.post("/users",(req,res)=>{
    res.send("Post for new user");
})

module.exports = router;
