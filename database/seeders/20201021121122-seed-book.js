'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      const books = require('../books.json')

      books.forEach(el => {
         el.createdAt = new Date()
         el.updatedAt = new Date()
      })

      return queryInterface.bulkInsert('Books', books, {})
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Books', null, {})
   }
};