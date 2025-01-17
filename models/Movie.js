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
        enum : ["Action","Adventure","Animation","Biography","Comedy", "Crime","Documentary","Drama","Fantasy","History", "Horror", "Music","Mystery","Romance","Sci-Fi","Sports","Thriller","War","Western","Family","Superhero","Noir","Fantasy","Post-Apocalyptic","Cyberpunk","Steampunk"
        ] 
    },
    director : {
        type : [
            {
                type : String,
                required : true,
            }
        ]
    },
    cast : {
        type : [String],
        required : true,
    },
    duration : {
        type : String,
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