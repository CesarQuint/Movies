const fs = require('fs')
const Movies = require('../db/movies')
var Seen = require ('../../seen.json')
var Wish = require ('../../wishList.json')

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
    
    return json
   
   } catch (error) {
    throw error
   }
}


const addSeen = async (movieId) => {
    try {
        const movie = await Movies.getMovie(movieId)
        
        if(!movie)
            return 

        const newMovie = {
            id : movie.id,
            data: movie
        }

        var seenList = fs.readFileSync('./seen.json');
        var response = JSON.parse(seenList);

        const found = response.filter(r => r.id == movie.id)

        if(found.length >= 1)
            return

        Seen = [...Seen,newMovie]
        
        fs.writeFileSync('./seen.json', JSON.stringify(Seen), function (err) {
            console.log(err);
          });
        
        return movie

    } catch (error) {
        throw error
    }
}

const deleteSeen = async (movieId) => {
    try {
        const movie = await Movies.getMovie(movieId)
        
        if(!movie)
            return 

        var seenList = fs.readFileSync('./seen.json');
        var response = JSON.parse(seenList);

        const newList = response.filter(r => r.id !== movie.id )

        fs.writeFileSync('./seen.json', JSON.stringify(newList, null, 2));
    
    } catch (error) {
       throw error 
    }
}

const getNotSeen = async () => {
    try {

       
       } catch (error) {
        throw error
       }
}


const getWishList = async (req,res) => {
    try {

        var data = fs.readFileSync('./wishList.json');
        var json = JSON.parse(data);
        
        return json
       
       } catch (error) {
        throw error
       }
}

const addWishList = async (movieId) => {
    try {
        const movie = await Movies.getMovie(movieId)
        
        if(!movie)
            return

        const newMovie = {
            id : movie.id,
            data: movie
        }

        var wishList = fs.readFileSync('./wishList.json');
        var response = JSON.parse(wishList);

        const found = response.filter(r => r.id == movie.id)

        if(found.length >= 1)
            return

        Wish = [...Wish,newMovie]
        
        fs.writeFileSync('./wishList.json', JSON.stringify(Wish), function (err) {
            console.log(err);
          });
        
        return movie

    } catch (error) {
        throw error
    }
}

const deleteWishList = async (movieId) => {
    try {
        const movie = await Movies.getMovie(movieId)
        
        if(!movie)
            return 

        var wishList = fs.readFileSync('./wishList.json');
        var response = JSON.parse(wishList);

        const newList = response.filter(r => r.id !== movie.id )

        fs.writeFileSync('./wishList.json', JSON.stringify(newList, null, 2));
    
    } catch (error) {
       throw error 
    }
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