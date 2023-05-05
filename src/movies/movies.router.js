const Router = require("express").Router();
const Hub = require('./movies.hub')

Router.get('/movies', Hub.getMovies)
Router.get('/movies/:movieId', Hub.getMovie)
Router.get('/movies/seen', Hub.getSeen)
Router.post('/movies/seen/:movieId', Hub.addSeen)
Router.delete('/movies/seen/:movieId', Hub.deleteSeen)
Router.get('/movies/not-seen', Hub.getNotSeen)
Router.delete('/movies/not-seen', Hub.deleteNotSeen)
Router.get('/movies/wishlist', Hub.getWishList)
Router.post('/movies/wishlist/:movieId', Hub.addWishList)
Router.delete('/movies/wishlist/:movieId', Hub.deleteWishList)

module.exports = Router