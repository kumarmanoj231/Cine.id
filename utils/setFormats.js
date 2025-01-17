const {parseString} = require("./parseString.js");
module.exports.setFormats = (movie)=>{
    movie.genre = parseString(movie.genre);
    movie.director = parseString(movie.director);
    movie.cast = parseString(movie.cast);
    return movie;
}