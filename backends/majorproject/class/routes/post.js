const express = require("express");
const router = express.Router();

router.get("/:id",(req,res)=>{
    res.send("This is a particuler post profile");
})

router.get("/",(req,res)=>{
    res.send("This is all post page");
})

router.post("/",(req,res)=>{
    res.send("Post for new post");
})

router.delete("/:id",(req,res)=>{
    res.send("Delete for new post");
})

module.exports = router;