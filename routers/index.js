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

// login + register juga nggak perlu pake routing sendiri kan?
// router.get('/register', UserController.registerForm)
// router.post('/register', UserController.register)

// router.get('/login', UserController.registerForm)
// router.post('/login', UserController.register)

// router.use('/books', BookRouter)
// router.use('/admin', UserRouter)



module.exports = router