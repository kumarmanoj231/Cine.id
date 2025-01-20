const connectDB = require("../utils/db.js");
const Movie = require("../models/Movie.js");
const data = require("./data.js");

// connection to Database
connectDB();

const initializeDB = async () => {
    try {
      // Delete all the data
      await Movie.deleteMany({});
  
      // Insert data
      const result = await Movie.insertMany(data);
      console.log("Data inserted successfully:", result);
    } catch (error) {
      console.error("Error inserting data:", error.message);
    } finally {
      process.exit(); // Ensure the script exits
    }
  };
  
initializeDB();

