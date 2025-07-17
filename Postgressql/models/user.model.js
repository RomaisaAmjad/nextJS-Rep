const { getUnixTime} = require ('date-fns');
module.exports = (sequelize,DataTypes)=>{

const User = sequelize.define('User',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false, 
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },   
    createdAt: {
      type: DataTypes.DATE, 
    },
    updatedAt: {
      type: DataTypes.DATE,
    }

},
{
    tableName : 'users',
}
);

User.beforeCreate(function(user){
    const unixDate = getUnixTime(new Date());
    user.createdAt = unixDate;
    user.updatedAt = unixDate;
})

return User;
}


