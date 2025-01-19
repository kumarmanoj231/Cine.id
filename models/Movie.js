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
  genres: {
    type: [{ type: String, required: true }],
  },
  directors: {
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
