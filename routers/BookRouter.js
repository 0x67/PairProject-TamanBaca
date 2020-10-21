const BookController = require('../controllers/BookController')

const router = require('express').Router()

// bagian admin buku
router.get('/', BookController.listPinjam) // buat si admin ngemanage buku kayak ngeliat status pinjam dll

router.get('/add', BookController.addBookForm)
router.post('/add', BookController.addBook)

router.get(`/edit/:id`, BookController.editBookForm)
router.post(`/edit/:id`, BookController.editBook)

router.get(`/delete/:id`, BookController.deleteBook)

// router.get('/')

// router.get('/pinjam')

// router.get('/checkout')
// router.post('/checkout')


module.exports = router