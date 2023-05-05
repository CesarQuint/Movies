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

    let data = fs.readFileSync('./seen.json');
    let seenList = JSON.parse(data);
    
    return seenList
   
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

        let seenList = fs.readFileSync('./seen.json');
        let response = JSON.parse(seenList);   

        const found = response.filter(r => r.id == movie.id)

        if(found.length >= 1)
            return

        Seen = [...Seen,newMovie]

        await deleteWishList(movieId)
        
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

        return {id:movie.id}
    
    } catch (error) {
       throw error 
    }
}

const getNotSeen = async () => {
    try {

        let data = fs.readFileSync('./notSeen.json')
        let notSeen = JSON.parse(data)

        
        let seenJson = fs.readFileSync('./seen.json')
        let seenList = JSON.parse(seenJson)

        let newList = []
        let coincidences =[]
        
        for (let index = 0; index < notSeen.length; index++) {
            for (let i2 = 0; i2 < seenList.length; i2++) {

                if(notSeen[index].id == seenList[i2].id)
                    coincidences = [...coincidences, seenList[i2].id]
            }
        }

        newList = notSeen.filter(item => !coincidences.includes(item.id));

        fs.writeFileSync('./notSeen.json', JSON.stringify(newList), function (err) {
            console.log(err);
          });
        
        return newList

       } catch (error) {
        throw error
       }
}


const getWishList = async () => {
    try {

        let data = fs.readFileSync('./wishList.json');
        let wishList = JSON.parse(data);
        
        return wishList
       
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

        let data = fs.readFileSync('./wishList.json');
        let wishList = JSON.parse(data);

        const found = wishList.filter(r => r.id == movie.id)

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

        let data = fs.readFileSync('./wishList.json');
        let wishList = JSON.parse(data);

        const newList = wishList.filter(r => r.id !== movie.id )

        fs.writeFileSync('./wishList.json', JSON.stringify(newList, null, 2));

        return {id:movie.id}
    
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