const { Tables } = require("../models/models")

class TableController{
    async getAll(req,res){
const table =  await Tables.findAll()
return res.json(table)
    }
}

module.exports = new TableController()