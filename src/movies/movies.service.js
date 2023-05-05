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


module.exports= {
    getMovies,
    getMovie
}