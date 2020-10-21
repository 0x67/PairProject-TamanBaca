const {User} = require('../database/models')
const {hashPassword} = require('../helper/hash')
const bcrypt = require('bcrypt');

// Buat reminder
// username/password untuk testing adalah user123

class UserController {
   static registerForm(req, res) {
      res.render('users/registerForm')
   }

   static register(req, res) {
      const saltedPassword = hashPassword(req.body.password)
      
      const newUser = {
         username: req.body.username,
         password: saltedPassword,
      }
      
      // NOTE: validasi unique username masih bocor di sequelize 
      // jadi nanti aku coba pake helper aja

      User.create(newUser)
         .then((data) => {
            res.redirect('/users/login')
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

   static loginForm(req, res) {
      res.render('users/loginForm')
   }

   static login(req, res) {
      const username = req.body.username
      const password = req.body.password
      // compareHash(password, userData.password)
      User.findOne({
         where: {
            username: username
         }
      })
      .then((user) => {
         if(!user) {
            res.send('Username not found')
         } 
         else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
               if(result === true) {
                  res.send('login sukses')
               }
               else {
                  res.send('salah password')
               }
            })
         }
      })
      .catch((err) => {
         res.send(err)
      })
   }

   static listUser(req, res) {
      User.findAll()
      .then((usersData) => {
         // res.send(usersData)
         res.render('users/userList')
      })
      .catch((err) => {
         res.send(err)
      });
   }
}

module.exports = UserController