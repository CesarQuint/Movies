require('dotenv').config()
const Express = require("express"); 
const Router = require('./src/router')
const Config = require('./config')

const app = Express(); 
const PORT = Config.port || 5000;

app.use(Express.json())

app.use(Router)

app.listen(PORT, () => {
    console.info(`[PORT] ${ PORT }`)
    console.info(`[TZ] ${ new Date() }`)
})
