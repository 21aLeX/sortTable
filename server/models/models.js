const sequelize = require('../bd.js')
const { DataTypes } = require('sequelize')

const Tables = sequelize.define('tables', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    amount: { type: DataTypes.INTEGER },
    distance: { type: DataTypes.INTEGER },
})

module.exports = {
    Tables
}