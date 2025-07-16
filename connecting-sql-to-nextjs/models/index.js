import { Sequelize, DataTypes } from "sequelize";
import mysql from "mysql2";
import { defineUserModel } from "./user.model.js";

let sequelize;

if (!sequelize) { // if connection is not established then make a connection
  sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      dialect: "mysql",
      dialectModule: mysql,
    }
  );
}

// Define all models here for complex app its good to have a centeralized like this rather than checking either connection is established or not for all models separately
const User = defineUserModel(sequelize, DataTypes);
//const Product = defineProductModel(sequelize, DataTypes); and many more


const db = {
  sequelize,
  Sequelize,
  User,
};

export default db;
