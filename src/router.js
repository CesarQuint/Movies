const Router = require("express").Router();

Router.get('/',(req, res) => {
  res.status(200).send({
    succes: true,
    data: {
        autor: 'cesarquint',
        email: 'cesarquinttl@gmail.com',
        message: 'Practice'
    }
  })
})

module.exports = [
  Router,
  require('./movies/movies.router')
]