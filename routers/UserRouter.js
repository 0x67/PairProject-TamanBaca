const UserController = require('../controllers/UserController')
const BookController = require('../controllers/BookController')

const router = require('express').Router()

// router.get('/')

router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

// router.get('/login', UserController.registerForm)
// router.post('/login', UserController.register)

// bagian admin user
// router.get('/users') // user list buat si admin

// router.get(`/users/edit/:id`)
// router.post(`/users/edit/:id`)

// router.get(`/users/delete/:id`)

// router.get(`/users/add/:id`)
// router.post(`/users/add/:id`)

module.exports = router