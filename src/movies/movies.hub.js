const Services = require('./movies.service')

const getMovies = async (req,res) => {
try {
    const {query} = req
    
    res.status(200).send(await Services.getMovies(query))
} catch (error) {
    res.status(404).error(new Error("No se encontro la lista de peliculas"))
}
}

const getMovie = async (req,res) => {
try {
    const {params} = req
    console.log(params);
    res.status(200).send(await Services.getMovie(params.movieId))

} catch (error) {
    res.status(404).error(new Error("No se encontro la Pelicula"))
}
}

module.exports= {
    getMovies,
    getMovie,
}