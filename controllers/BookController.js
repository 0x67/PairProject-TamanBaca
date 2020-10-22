const { Book, User, BookUser } = require('../database/models');
const { addDays } = require('../helper/index.js');
const { Op } = require("sequelize");

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

    static listPinjam(req, res) {
        let user;
        if (req.params.id) {
            let idParams = +req.params.id;
            User.findByPk(idParams)
            .then((users) => {
                user = users;
                return Book.findAll({ include: [BookUser] })
            })
            .then((books) => {
                res.render('listPinjam', { user, books });
            })
            .catch((err) => {
                res.send(err.message);
            })
        }
        else {
            res.redirect('/');
        }
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
        .catch((err) => {
            res.send(err.message);
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

    static pinjamForm (req, res) {
        let books;
        Book.findAll({
            where: {
                stock: {
                    [Op.gt]: 0
                }
            }
        })
        .then((book) => {
            books = book;
            return User.findAll()
        })
        .then((users) => {
            res.render('pinjam', { users, books });
        })
        .catch((err) => {
            res.send(err.message);
        })
    }

    static pinjam (req, res) {
        let idUser = req.body.UserId;
        let idBook = req.body.BookId;

        let bookUser = {
            BookId: idBook,
            UserId: idUser,
            datePinjam: new Date(),
            dateKembali: addDays(7)
        }

        BookUser.create(bookUser)
        .then((data) => {
            return Book.findByPk(idBook)
        })
        .then((data1) => {
            let stock = data1.stock - 1;
            let book = {
                title: data1.title,
                author: data1.author,
                cover: data1.cover,
                stock: stock
            }

            return Book.update(book, {
                where: {
                    id: idBook
                }
            })
        })
        .then((data2) => {
            res.redirect(`/books/${idUser}`);
        })
        .catch((err) => {
            if (err.name === 'SequelizeValidationError') {
                if (err.errors.length > 0) {
                    let errors = err.errors.map((error) => {
                        return error.message;
                    });
                    req.app.locals.message = errors;
                }
                res.redirect(`/books/pinjam`);
            }
            else {
                res.send(err.message);
            }
        })
    }

    static ubahStatus (req, res) {
        let idParams = +req.params.id;
        let idBuku = 0;
        let idUser = 0;

        BookUser.findByPk(idParams)
        .then((data) => {
            idUser = data.UserId;
            if (data.status === 'dipinjam') {
                idBuku = data.BookId;
            }
            let pinjam = {
                UserId: data.UserId,
                BookId: data.BookId,
                datePinjam: data.datePinjam,
                dateKembali: data.dateKembali,
                status: 'sudah dikembalikan'
            }
            return BookUser.update(pinjam, {
                where: {
                    id: idParams
                }
            })
        })
        .then((data1) => {
            if (idBuku !== 0) {
                return Book.findByPk(idBuku)
            }
            else {
                res.redirect(`/books/${idUser}`);
            }
        })
        .then((data2) => {
            let stock = data2.stock + 1;
            let book = {
                id: data2.id,
                title: data2.title,
                author: data2.author,
                cover: data2.cover,
                stock: stock
            }
            return Book.update(book, {
                where: {
                    id: idBuku
                }
            })
        })
        .then((data3) => {
            res.redirect(`/books/${idUser}`);
        })
        .catch((err) => {
            res.send(err.message);
        })
    }
}

module.exports = BookController