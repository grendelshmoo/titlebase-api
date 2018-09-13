const router = require('express').Router()
const ctrl = require('../controllers/contacts')
const auth = require('../lib/auth')

// add auth.isLoggedIn middleware
router.get('/', auth.isLoggedIn, ctrl.getAll)
router.post('/', ctrl.checkForContact)

module.exports = router
