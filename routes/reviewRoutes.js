const reviewCntrl  = require('../controllers/reviewsController.js')

const router   = require('express').Router()

router.post('/add-review',reviewCntrl.addReview)
router.get('/get-review/',reviewCntrl.getReview)


module.exports = router