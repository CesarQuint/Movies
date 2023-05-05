const Router = require("express").Router();
const Hub = require('./movies.hub')

Router.get('/movies', Hub.getMovies) //Done but need pagination
Router.get('/movie/:movieId', Hub.getMovie) //!Done
Router.get('/movies/seen', Hub.getSeen) //TODO :Add Pagination
Router.post('/movies/seen/:movieId', Hub.addSeen) //!Done
Router.delete('/movies/seen/:movieId', Hub.deleteSeen) //? In progress
Router.get('/movies/not-seen', Hub.getNotSeen) //
Router.get('/movies/wishlist', Hub.getWishList) //*Done __Need to be tested
Router.post('/movies/wishlist/:movieId', Hub.addWishList) //*Done __Need be tested
Router.delete('/movies/wishlist/:movieId', Hub.deleteWishList) //*?In progress

module.exports = Router