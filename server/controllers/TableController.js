const { Tables } = require("../models/models")

class TableController {
    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 5
        let offset = page * limit - limit
        const table = await Tables.findAndCountAll({ raw: true, limit, offset })
        return res.json(table)
    }
}

module.exports = new TableController()