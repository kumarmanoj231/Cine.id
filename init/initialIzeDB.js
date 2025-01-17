const connectDB = require("../utils/db.js");
const Movie = require("../models/Movie.js");
const data = require("./data.js");

// connection to Database
connectDB();

const initializeDB = async()=>{
    // delete all the data
    await Movie.deleteMany({});

    let result = await Movie.insertMany(data);
    console.log(result);

}
initializeDB();

