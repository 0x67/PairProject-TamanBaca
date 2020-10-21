'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('BookUsers', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         UserId: {
            type: Sequelize.INTEGER
         },
         BookId: {
            type: Sequelize.INTEGER
         },
         datePinjam: {
            type: Sequelize.DATE
         },
         dateKembali: {
            type: Sequelize.DATE
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
         }
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('BookUsers');
   }
};