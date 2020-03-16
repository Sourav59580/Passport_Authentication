const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();


//EJS (view engine set)
app.use(expressLayouts);
app.set("view engine","ejs");

//routes
app.use("/",require("./routes/auth"));


//connection 
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})
