module.exports = (sequelize, DataTypes) => {
    const Reviews = sequelize.define('reviews',{
        rating:{
            type:DataTypes.INTEGER,
            // alloNull:false
        },
        description:{
            type:DataTypes.TEXT,
            // alloNull:false
        },
        product_id:{
            type:DataTypes.STRING
        }

    },{

    })

    return Reviews;
}