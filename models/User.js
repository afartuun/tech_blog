const { userInfo } = require('os');
const {Model, DataTypes} = require('sequelize');

class User extends Model {}

User.init(
    {
        username: {
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{len:6}
    },
    sequelize:require('../config/connection'),
    modelName: 'user'


)

module.exports = User;