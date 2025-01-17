const express = require("express");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");

const connectDB = require("./utils/db.js");

const Movie = require("./models/Movie.js");
const exp = require("constants");

const {setFormats} = require("./utils/setFormats.js");

const app = express();


// configurations
dotenv.config();

// connection to DB
connectDB();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));


app.listen(process.env.PORT, ()=>{
    console.log(`app is listening at PORT ${process.env.PORT}`);
});

app.get('/',(req,res)=>{
    res.send("root directory!");
});

// Movie Routes

// index route
app.get('/movies',async (req,res)=>{
    let allMovies = await Movie.find({});
    res.render("movies/index.ejs", {allMovies});
});

// new route
app.get('/movies/new', (req,res)=>{
    res.render("movies/new.ejs");
});

app.post('/movies',async (req,res)=>{
    let {movie} = req.body;
    let newMovie = new Movie(setFormats(movie));
    let result = await newMovie.save();
    console.log(result);
    res.redirect("/movies");
    
})

// show route
app.get('/movies/:id',async (req,res)=>{
    let {id} = req.params;

    const movie = await Movie.findById(id);
    res.render("movies/show.ejs", {movie});
});

// edit route

app.get('/movies/:id/edit', async (req,res)=>{
    let {id} = req.params;

    let movie = await Movie.findById(id);
    res.render("movies/edit.ejs", {movie});
});

app.put('/movies/:id',async (req,res)=>{
    let {id} = req.params;
    let {movie} = req.body;
    let result = await Movie.findByIdAndUpdate(id, setFormats(movie));
    console.log(result);
    res.redirect(`/movies/${id}`);
})

// delete route

app.delete('/movies/:id',async (req,res)=>{
    let {id} = req.params;
    let result = await Movie.findByIdAndDelete(id);
    console.log(result);
    res.redirect("/movies");
});





