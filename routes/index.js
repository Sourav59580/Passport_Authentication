const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/authenticate");


//@type GET
//$route /
//@desc route for welcome page
//@access PUBLIC
router.get("/",(req,res)=>{
    res.render("dashboard",(req,res)=>{
        res.render('dashboard',{
            name : req.user.name
        });
    });
})


module.exports = router;