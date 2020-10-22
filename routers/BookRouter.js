const BookController = require('../controllers/BookController')

const router = require('express').Router()

let admin = function (req, res, next) {
    if (req.session.userId) {
        if (req.session.userRole === 'admin') {
            next()
        }
        else {
            res.redirect('/');
        }
    }
    else {
        const error = 'Please Login First'
        res.redirect(`/users/login?error=${error}`);
    }
}

let user = function (req, res, next) {
    if (req.session.userId) {
        if (req.session.userRole === 'user' || req.session.userRole === 'admin') {
            next()
        }
        else {
            res.redirect('/');
        }
    }
    else {
        const error = 'Please Login First'
        res.redirect(`/users/login?error=${error}`);
    }
}

// bagian admin buku
router.get('/', BookController.listPinjam) // buat si admin ngemanage buku kayak ngeliat status pinjam dll

router.get('/add', admin, BookController.addBookForm)
router.post('/add', BookController.addBook)

router.get(`/edit/:id`, admin, BookController.editBookForm)
router.post(`/edit/:id`, BookController.editBook)

router.get(`/delete/:id`, admin, BookController.deleteBook)

router.get('/status/:id', admin, BookController.ubahStatus)

// router.get('/')

router.get('/pinjam', admin, BookController.pinjamForm)
router.post('/pinjam', BookController.pinjam)

router.get('/listPinjam', user, BookController.routeListPinjam)

// router.get('/checkout')
// router.post('/checkout')

router.get('/:id', user, BookController.listPinjam)

module.exports = router