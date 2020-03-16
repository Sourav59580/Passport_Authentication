const express = require("express");
const router = express.Router();


//@type GET
//$route /
//@desc route for welcome page
//@access PUBLIC
router.get("/",(req,res)=>{
  res.render('welcome');
})

//@type GET
//$route /login
//@desc route for login page
//@access PUBLIC
router.get("/login",(req,res)=>{
    res.render('login');
  })

//@type GET
//$route /register
//@desc route for register
//@access PUBLIC
router.get("/register",(req,res)=>{
    res.render("register");
  })


module.exports = router;