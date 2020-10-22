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
      UserId: {
         type: DataTypes.INTEGER,
         validate: {
            notEmpty: {
               args: true,
               msg: 'Peminjam is required'
            }
         }
      },
      BookId: {
         type: DataTypes.INTEGER,
         validate: {
            notEmpty: {
               args: true,
               msg: 'Buku is required'
            }
         }
      },
      datePinjam: DataTypes.DATE,
      dateKembali: DataTypes.DATE,
      status: DataTypes.STRING
   }, {
      sequelize,
      modelName: 'BookUser',
   });

   BookUser.beforeCreate((instance, option) => {
      if (!instance.status) {
         instance.status = 'dipinjam';
      }
   })
   return BookUser;
};