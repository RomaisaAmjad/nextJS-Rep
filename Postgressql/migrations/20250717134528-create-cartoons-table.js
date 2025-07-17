'use strict';
const {Sequelize} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable("cartoons", {
      id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        title:{
            type:Sequelize.STRING,
            allowNull:false
        },
        character:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        createdAt:{
          allowNull:false,
          type:Sequelize.DATE,
          defaultValue:Sequelize.NOW
        },
        updatedAt:{
          allowNull:false,
          type:Sequelize.DATE,
          defaultValue:Sequelize.NOW
        },
     });
     
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('cartoons');
     
  }
};
