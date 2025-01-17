const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async()=>{

    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Sucessfully connected to DB Cine.id 👍")
    }).catch((err)=>{
        console.log(err);
    })

}

module.exports =  connectDB;