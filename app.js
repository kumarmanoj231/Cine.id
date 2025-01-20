const express = require("express");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const connectDB = require("./utils/db.js");

const Movie = require("./models/Movie.js");
const exp = require("constants");

const {setFormats} = require("./utils/setFormats.js");
const ExpressError = require("./utils/expressError.js");
const wrapAsync = require("./utils/wrapAsync.js");

const app = express();


// configurations
dotenv.config();

// connection to DB
connectDB();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);


app.listen(process.env.PORT, ()=>{
    console.log(`app is listening at PORT ${process.env.PORT}`);
});

app.get('/',(req,res)=>{
    res.render("index.ejs");
});

// Movie Routes

// index route
app.get('/movies',wrapAsync(async (req,res)=>{
    let allMovies = await Movie.find({});
    res.render("movies/index.ejs", {allMovies});
}));

// new route
app.get('/movies/new', (req,res)=>{
    res.render("movies/new.ejs");
});

app.post('/movies',wrapAsync(async (req,res)=>{
    if(!req.body.movie){
        throw new ExpressError(400, "send valid data"); 
    }
    let {movie} = req.body;
    let newMovie = new Movie(setFormats(movie));
    let result = await newMovie.save();
    console.log(result);
    res.redirect("/movies");
    
}));


// show route
app.get('/movies/:id',wrapAsync(async (req,res)=>{
    let {id} = req.params;

    const movie = await Movie.findById(id);
    res.render("movies/show.ejs", {movie});
}));

// edit route

app.get('/movies/:id/edit', wrapAsync(async (req,res)=>{
    let {id} = req.params;

    let movie = await Movie.findById(id);
    res.render("movies/edit.ejs", {movie});
}));

app.put('/movies/:id',wrapAsync(async (req,res)=>{
    let {id} = req.params;
    if(!req.body.movie){
        throw new ExpressError(400, "send valid data"); 
    }
    let {movie} = req.body;
    console.log(movie);
    let result = await Movie.findByIdAndUpdate(id, setFormats(movie));
    console.log(result);
    res.redirect(`/movies/${id}`);
}));

// delete route

app.delete('/movies/:id',wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let result = await Movie.findByIdAndDelete(id);
    console.log(result);
    res.redirect("/movies");
}));

app.use("*",(req,res,next)=>{
    next(new ExpressError(404, "Page Not Found!"));
})



app.use((err,req,res,next)=>{
    let {statusCode=500, message="some error occured!"} = err;
    res.render("error.ejs",{message});

})





