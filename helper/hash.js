const bcrypt = require('bcrypt');

const hashPassword = (password) => {
   let salt = bcrypt.genSaltSync(10)
   let hash = bcrypt.hashSync(password, salt)
   return hash
}

const compareHash = (passwordInput, hash) => {
   const checkPassword = bcrypt.compare(passwordInput, hash)

   return checkPassword
}
module.exports = {hashPassword, compareHash}
