const UserController = require('../controllers/UserController')
const BookController = require('../controllers/BookController')

const router = require('express').Router()

// router.get('/')

// bagian admin buku
router.get('/books') // buat si admin ngemanage buku kayak ngeliat status pinjam dll

router.get('/books/add')
router.post('/books/add')

router.get(`/books/edit/:id`)
router.post(`/books/edit/:id`)

router.get(`/books/delete/:id`)

// bagian admin user
router.get('/users') // user list buat si admin

router.get(`/users/edit/:id`)
router.post(`/users/edit/:id`)

router.get(`/users/delete/:id`)

router.get(`/users/add/:id`)
router.post(`/users/add/:id`)

module.exports = router