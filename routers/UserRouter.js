const UserController = require('../controllers/UserController')

const router = require('express').Router()

// router.get('/')

router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)


router.get('/list', UserController.listUser)

router.get(`/edit/:id`, UserController.editForm)
router.post(`/edit/:id`, UserController.edit)

router.get(`/delete/:id`, UserController.deleteUser)

router.get(`/add`, UserController.addUserForm)
router.post(`/add`, UserController.addUser)

module.exports = router