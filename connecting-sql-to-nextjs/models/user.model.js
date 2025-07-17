import { DataTypes } from "sequelize";

export const defineUserModel = (sequelize) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password:{
      type : DataTypes.STRING,
    }
  },{
    timestamps: false, 
    tableName: 'users', 
  }

);
};
