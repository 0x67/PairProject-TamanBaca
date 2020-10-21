'use strict';
const {
   Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class BookUser extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         BookUser.belongsTo(models.User, {foreignKey: 'UserId'})
         BookUser.belongsTo(models.Book, {foreignKey: 'BookId'})
      }
   };
   BookUser.init({
      UserId: DataTypes.INTEGER,
      BookId: DataTypes.INTEGER,
      datePinjam: DataTypes.DATE,
      dateKembali: DataTypes.DATE
   }, {
      sequelize,
      modelName: 'BookUser',
   });
   return BookUser;
};