const {Sequelize} = require('sequelize');
require(dotenv).config();

let sequelize;
if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
}else{
    sequelize = new Sequelize(process.env.DB_Name, 
        process.env.DB_USER, 
        process.DB_PW, {
            host:'localhost',
            dialect: 'mysql',
            logging: false

    })
}

module.exports = sequelize;