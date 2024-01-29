const express = require('express')
const { processPayment, sendStripeApiKey } = require('../controllers/paymentControllers')
const router = express.Router()
const {isAuthenticateUser} = require('../middleware/authenticate')

router.post('/payment/process',isAuthenticateUser,processPayment)
router.get('/stripeApi',isAuthenticateUser, sendStripeApiKey)


module.exports = router