const router = require('express').Router()
const ctrl = require('../controllers/properties')
const auth = require('../lib/auth')


router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/search', ctrl.propertySearch)
router.get('/:propertyId', auth.isLoggedIn, ctrl.getOne)
router.get('/:propertyId/records', auth.isLoggedIn, ctrl.getPropertyRecords)
router.get('/:propertyId/chain', auth.isLoggedIn, ctrl.getChainOfTitle)
router.get('/:propertyId/analyze', auth.isLoggedIn, ctrl.analyzeRisk)
router.post('/', auth.isLoggedIn, ctrl.checkForProperty)
router.delete('/:propertyId', auth.isLoggedIn, ctrl.deleteProperty)
router.patch('/:propertyId', auth.isLoggedIn, ctrl.editProperty)


module.exports = router
