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

    res.status(200).send(await Services.getMovie(params.movieId))

} catch (error) {
    res.status(404).error(new Error("No se encontro la Pelicula"))
}
}

const getSeen = async (req,res) => {
    
}


const addSeen = async (req,res) => {
    try {
        const {params} = req
    
        res.status(200).send(await Services.addSeen(params.movieId))
    
    } catch (error) {
        res.status(404).error(new Error("Hubo un error al agregar la pelicula"))
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