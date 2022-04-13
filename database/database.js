const sequelize = require('sequelize')

const connection = new sequelize('dbCurso', 'root', '280305', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection