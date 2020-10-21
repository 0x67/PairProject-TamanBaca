const router = require('express').Router()

// Controller
const BookController = require('../controllers/BookController')
const UserController = require('../controllers/UserController')

// Router
const BookRouter = require('./BookRouter')
const UserRouter = require('./UserRouter');

// yang halaman utama buat list buku aku lempar ke BookController ya
// jadi nggak perlu pake routing sendiri

// router.get('/', BookController.homepage)

// router.use('/books', BookRouter)
// router.use('/users', UserRouter)



module.exports = router