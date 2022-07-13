require('dotenv').config()
const express = require('express')
const sequelize = require('./bd.js')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index.js')

const port = process.env.port || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

const start = async () => {
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(port, () => console.log('server start ' + port))
    } catch (e) {
        console.log(e)
    }
}

start()