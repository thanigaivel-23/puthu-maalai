const expressAsyncHandler = require('express-async-handler')
const stripe = require('stripe')('sk_test_51OWv0KSIVa65gnPzJ1nUbUJDbfi71KgSSUjWkKZa7J6r1mQTDcDzTjSOsXBgW3KeYiL9xjjaJcoIbY6Ant9LksNc00f2nQCWkW')


exports.processPayment = expressAsyncHandler(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "usd",
        description: 'puthumaalai test payment',
        metadata: { integration_check: 'accept_payment' },
        shipping: req.body.shipping
    })

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})

exports.sendStripeApiKey = expressAsyncHandler(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })

})