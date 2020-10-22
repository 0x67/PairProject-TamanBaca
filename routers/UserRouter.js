const UserController = require('../controllers/UserController')

const router = require('express').Router()

// router.get('/')

router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

router.use(function (req, res, next) {
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
})

router.get('/list', UserController.listUser)

router.get(`/edit/:id`, UserController.editForm)
router.post(`/edit/:id`, UserController.edit)

router.get(`/delete/:id`, UserController.deleteUser)

router.get(`/add`, UserController.addUserForm)
router.post(`/add`, UserController.addUser)

module.exports = router