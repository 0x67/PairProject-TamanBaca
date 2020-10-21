const UserController = require('../controllers/UserController')

const router = require('express').Router()

// bagian admin buku
router.get('/books') // buat si admin ngemanage buku kayak ngeliat status pinjam dll

router.get('/books/add')
router.post('/books/add')

router.get(`/books/edit/:id`)
router.post(`/books/edit/:id`)

router.get(`/books/delete/:id`)

// router.get('/')

// router.get('/pinjam')

// router.get('/checkout')
// router.post('/checkout')


module.exports = router