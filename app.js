const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./utils/db.js");

const Movie = require("./models/Movie.js");

const app = express();


// configurations
dotenv.config();

// connection to DB
connectDB();



app.listen(process.env.PORT, ()=>{
    console.log(`app is listening at PORT ${process.env.PORT}`);
});

app.get("/",(req,res)=>{
    res.send("root directory!");
})
