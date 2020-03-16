const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();

//db config 
const db = require("./config/keys").mongoURI;

//connect to Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err) =>{
    console.log(err);
})

//EJS (view engine set)
app.use(expressLayouts);
app.set("view engine","ejs");

//body-parser (middleware)
app.use(bodyparser.urlencoded({extended : false}));

//Actual routes
app.use("/",require("./routes/auth"));



//connection 
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})
