const Movies = require('../db/movies')

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
        movieId
        const movie = await Movies.getMovie(movieId)
        return movie

    } catch (error) {
        throw error
    }
}


const getSeen = async (req,res) => {
    
}


const addSeen = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteSeen = async (req,res) => {
    
}

const getNotSeen = async (req,res) => {
    
}


const getWishList = async (req,res) => {
    
}

const addWishList = async (req,res) => {
    
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