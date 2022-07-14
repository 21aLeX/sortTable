const Router = require('express')
const router = new Router()
const tableController = require('../controllers/TableController')

 router.get('/',tableController.getAll)
 
 module.exports = router