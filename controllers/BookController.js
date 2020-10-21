const {Book} = require('../database/models');

class BookController {
    static homepage(req, res) {
        Book.findAll()
        .then((books) => {
            res.render('book', { books });
        })
        .catch((err) => {
            res.send(err.message);
        })
    }

    static listPinjam() {
        //
    }

    static addBookForm (req, res) {
        const message = req.app.locals.message || '';
        delete req.app.locals.message;

        res.render('addBook', { message });
    }

    static addBook (req, res) {
        let book = {
            title: req.body.title,
            author: req.body.author,
            cover: req.body.cover,
            stock: req.body.stock
        }

        Book.create(book)
        .then((data) => {
            res.redirect('/');
        })
        .catch((err) => {console.log(err.errors);
            if (err.name === 'SequelizeValidationError') {
                if (err.errors.length > 0) {
                    let errors = err.errors.map((error) => {
                        return error.message;
                    });
                    req.app.locals.message = errors;
                }
                res.redirect('/books/add');
            }
            else {
                res.send(err.message);
            }
        })
    }

    static editBookForm (req, res) {
        let idparams = +req.params.id;
        Book.findByPk(idparams)
        .then((book) => {
            const message = req.app.locals.message || '';
            delete req.app.locals.message;

            res.render('editBook', { book, message });
        })
    }

    static editBook (req, res) {
        let idParams = +req.params.id;

        let book = {
            title: req.body.title,
            author: req.body.author,
            cover: req.body.cover,
            stock: req.body.stock
        }

        Book.update(book, {
            where: {
                id: idParams
            }
        })
        .then((data) => {
            res.redirect('/');
        })
        .catch((err) => {
            if (err.name === 'SequelizeValidationError') {
                if (err.errors.length > 0) {
                    let errors = err.errors.map((error) => {
                        return error.message;
                    });
                    req.app.locals.message = errors;
                }
                res.redirect(`/books/edit/${idParams}`);
            }
            else {
                res.send(err.message);
            }
        })
    }

    static deleteBook (req, res) {
        let idParams = +req.params.id;

        Book.destroy({
            where: {
                id: idParams
            }
        })
        .then((data) => {
            res.redirect('/');
        })
        .catch((err) => {
            res.send(err.message);
        })
    }
}

module.exports = BookController