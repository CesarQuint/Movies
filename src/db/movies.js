const fs = require("fs")
const axios = require('axios');
const Config =require('../../config')

async function getMovies (query) {

const options = {
    method: 'GET',
    url: `https://${Config.apiHost}/`,
    headers: {
      'X-RapidAPI-Key': Config.apiKey,
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  }
   

  try {

        const response = await axios.request(options);

        let result = response.data.map(movie => {
            return {
                id: movie.id,
                data:{
                    rank: movie.rank,
                    title: movie.title,
                    id: movie.id
                }
            }
        })

        jsonString = JSON.stringify(result)
        fs.writeFileSync("./movies.json",jsonString)
        fs.writeFileSync("./notSeen.json",jsonString)
        
        const pages = Math.ceil(response.data.length / 10)
       
        let pagination = chunkArray(result, 10);
        
        
        return {
            pages ,
            movies: pagination[query-1]
        }

  } catch (error) {
      console.error(error);
  }
}

const getMovie = async (movieId) => {
    
    const options = {
        method: 'GET',
        url: `https://${Config.apiHost}/${movieId}`,
        headers: {
          'X-RapidAPI-Key': Config.apiKey,
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };
      
      try {
            const response = await axios.request(options)
            const result = response.data
            return {
                rank: result.rank,
                title: result.title,
                id: result.id 
            }
            
      } catch (error) {
          console.error(error);
      }
    }
    

    
    function chunkArray(myArray, chunk_size){
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];
        
        for (index = 0; index < arrayLength; index += chunk_size) {
            myChunk = myArray.slice(index, index + chunk_size);
          
            tempArray.push(myChunk);
        }
    
        return tempArray;
    }


module.exports = {
    getMovies,
    getMovie
}