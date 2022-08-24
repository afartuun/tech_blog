const {Model, DataTypes} = requirea('sequelize');

class Post extends Model {}

Post.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        text :{
            type:DataTypes.TEXT,
            allowNull:false
        },
        userId:{
            type:DataTypes.INTEGER,
            references:{model:'user',key:'id'}
        },

        sequelize,
        freezeTableName: true, 
        underscored:true,
        modelName:'post'


    }
)

module.exports = Post;