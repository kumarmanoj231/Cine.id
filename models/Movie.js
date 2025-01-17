const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    releaseYear : {
        type : Number,
        required : true,
    },
    genre : {
        type : [String],
        required : true,
       
    },
    director : {
        type : [String],
        required : true,
    },
    cast : {
        type : [String],
        required : true,
    },
    duration : {
        type : Number,
        required : true,
    },
    rating : {
        type : Number,
        default : 0.0,
        required : true,
    },
    posterUrl : {
        type : String,
        required : true,
    },
    synopsis : {
        type : String,
        required : true,
    }

});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;