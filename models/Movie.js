const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: [{ type: String, required: true }],
  },
  director: {
    type: [
      {
        type: String,
        required: true,
      },
    ],
  },
  cast: {
    type : [
        {type : String,
            required : true,
        }
    ]
  },
  duration: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
