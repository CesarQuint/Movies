const fs = require('fs')
const Movies = require('../db/movies')
var Obj = require ('../../seen.json')

const getMovies = async (query) => {
    try {

        const movies = await Movies.getMovies(Number(query.page))
        return movies

    } catch (error) {
        throw error
    }
}
const getMovie = async (movieId) => {
    try {

        const movie = await Movies.getMovie(movieId)
        return movie

    } catch (error) {
        throw error
    }
}


const getSeen = async () => {
   try {

    var data = fs.readFileSync('./seen.json');
    var json = JSON.parse(data);
    console.log(json);
   } catch (error) {
    throw error
   }
}


const addSeen = async (movieId) => {
    try {
        const movie = await Movies.getMovie(movieId)
        console.log(movie)

        console.log();

        
        Obj[movie.id] = movie
        
        fs.writeFileSync('./seen.json', JSON.stringify(Obj), function (err) {
            console.log(err);
          });
        
        return movie

    } catch (error) {
        throw error
    }
}

const deleteSeen = async (req,res) => {
    
}

const getNotSeen = async (req,res) => {
    
}


const getWishList = async (req,res) => {
    
}

const addWishList = async (movieId) => {
    try {
        const movie = await Movies.getMovie(movieId)
        console.log(movie)

        console.log();

        
        Obj[movie.id] = movie
        
        fs.writeFileSync('./seen.json', JSON.stringify(Obj), function (err) {
            console.log(err);
          });
        
        return movie
        
    } catch (error) {
        throw error
    }
}

const deleteWishList = async (req,res) => {
    
}




module.exports= {
    getMovies,
    getMovie,
    getSeen,
    addSeen,
    deleteSeen,
    getNotSeen,
    getWishList,
    addWishList,
    deleteWishList
}