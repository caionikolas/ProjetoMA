const Sequelize = require("sequelize")
const connection = new Sequelize('controleinvestimentos','root','bakacris0',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

