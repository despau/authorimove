var express = require("express"),
    router  = express.Router(),
    passport = require("passport");

//models
var User = require("../models/user");

 router.get("/", (req, res)=>{
     res.render("./index/home");
 });


 router.get("/login", (req, res)=>{
    res.render("./index/login");
});



router.get("/register", (req, res)=>{
    // res.render("./index/register");
    res.send("This is the register page");
});



router.get("/logout", (req, res)=>{
    // res.render("./index/logout");
    res.send("This is the Logout page");
});

module.exports = router;


