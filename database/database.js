const sequelize = require('sequelize')

const connection = new sequelize('dbcurso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection