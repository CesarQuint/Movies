const Services = require('./movies.service')

const getMovies = async (req,res) => {
try {
    const {query} = req
    
    res.status(200).send(await Services.getMovies(query))
} catch (error) {
    res.status(404)
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
    try {
       res.status(200).send( await Services.getSeen())
    } catch (error) {
        res.status(404)
    }
}


const addSeen = async (req,res) => {
    try {
        const {params} = req
    
        res.status(200).send(await Services.addSeen(params.movieId))
    
    } catch (error) {
        res.status(404).send("Hubo un error al agregar la Pelicula")
    }
    
}

const deleteSeen = async (req,res) => {
    try {
        const {params} = req
    
        res.status(200).send(await Services.deleteSeen(params.movieId))
    
    } catch (error) {
        res.status(404).send("Hubo un error al Eliminar la Pelicula")
    }
    
}

const getNotSeen = async (req,res) => {
    try {
        res.status(200).send( await Services.getNotSeen())
     } catch (error) {
         res.status(404)
     }
}


const getWishList = async (req,res) => {
    try {
        res.status(200).send( await Services.getWishList())
     } catch (error) {
         res.status(404)
     }
}

const addWishList = async (req,res) => {
    try {
        const {params} = req
    
        res.status(200).send(await Services.addWishList(params.movieId))
    
    } catch (error) {
        res.status(404)
    }
    
}

const deleteWishList = async (req,res) => {
    try {
        const {params} = req
    
        res.status(200).send(await Services.deleteWishList(params.movieId))
    
    } catch (error) {
        res.status(404)
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