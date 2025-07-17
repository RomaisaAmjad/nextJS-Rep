'use strict';
const bcrypt = require('bcrypt');

const userTableName = "users"
const cartoonTableName = "cartoons"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      userTableName,[
        {
          username: 'Romaisa',
          email: 'romaisa123@gmail.com',
          password: await bcrypt.hash('Romaisa123', 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Areeba',
          email: 'areeba456@gmail.com',
          password: await bcrypt.hash('Areeba', 12),
          createdAt: new Date(),
           updatedAt: new Date(),
        },{
          username: 'Neha',
          email: 'neha456@gmail.com',
          password: await bcrypt.hash('Neha123', 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],{})
    
    await queryInterface.bulkInsert(
      cartoonTableName,[
        {
          title:"Doreamon",
          character:"Nobita",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:"Ben 10",
          character:"Keven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          title:"Shinchan",
          character:"Mitsi",
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          title:"Oggy and the cockroaches",
          character:"Olive",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],{})
    
  },

  async down (queryInterface, Sequelize) {
    
 await queryInterface.dropTable(userTableName);
 await queryInterface.dropTable(cartoonTableName);
     
  }
};
