const axios = require('axios');
const Config =require('../../config')

async function getMovies (query) {

    let start
    let end

    if(query == 1){
        start = 0
        end = 10
    }

    if(query > 1){
        start = query + 8
        end = start + 10
    }
    console.log(start,end);
    
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
        const result = await response.data
        const movies = result.slice(start,end)
        const pages = Math.ceil(response.data.length / 10)
       
        return {
            pages ,
            movies
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
            const response = await axios.request(options);
           return response.data
      } catch (error) {
          console.error(error);
      }
    }
    

module.exports = {
    getMovies,
    getMovie
}