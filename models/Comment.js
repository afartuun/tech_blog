const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type:DataTypes.INTEGER,
            alloNull:false,
            primaryKey: true
        },
        commentTxt: {
            type: DataTypes.Text,
            allowNull: false,
        },
        userId: {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        
            sequelize,
            freezeTableName: true,
            underscored:true,
            modelName:'comment'
        
    }
)

module.exports = Comment;