const express = require("express");
const router = express.Router();


//@type GET
//$route /
//@desc route for welcome page
//@access PUBLIC
router.get("/", (req, res) => {
    res.render('welcome');
})

//@type GET
//$route /login
//@desc route for get login page
//@access PUBLIC
router.get("/login", (req, res) => {
    res.render('login');
})

//@type GET
//$route /register
//@desc route for get register
//@access PUBLIC
router.get("/register", (req, res) => {
    res.render("register");
})

//@type POST
//$route /register
//@desc route for post register
//@access PUBLIC
router.post("/register", (req, res) => {
    const {
        name,
        email,
        password,
        password2
    } = req.body;
    let errors = [];

    //check password match
    if (password !== password2) {
        errors.push({
            msg: "Password do not match"
        });
    }

    //check password length 
    if (password.length < 6) {
        errors.push({
            msg: "Password is too weak"
        });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        res.send("success");
    }
})



module.exports = router;