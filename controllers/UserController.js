const {User} = require('../database/models')
const {hashPassword, compareHash} = require('../helper/hash')

// Buat reminder
// username/password untuk testing adalah user123

class UserController {
   static registerForm(req, res) {
      res.render('users/registerForm')
   }

   static register(req, res) {
      const saltedPassword = hashPassword(req.body.password)
      const plainPassword = compareHash(req.body.password, saltedPassword)
      
      const newUser = {
         username: req.body.username,
         password: saltedPassword,
      }
      
      // NOTE: validasi unique username masih bocor di sequelize

      User.create(newUser)
         .then((data) => {
            res.redirect('/users/register')
         })
         .catch((err) => {
            if(err === 'SequelizeValidationError') {
               res.send(err.message)
            }
            
            else {
               res.send(err)
            }
         });
   }
}

module.exports = UserController