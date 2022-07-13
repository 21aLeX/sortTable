const Router = require('express')
const router = new Router()
const tableRoutes = require('./tableRoutes.js')


router.use('/', tableRoutes)

 module.exports = router