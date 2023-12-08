const expressAsyncHandler = require('express-async-handler');
const orderDB = require('../models/odrerModel')
const productDB = require('../models/productModels');
const ErrorHandler = require('../utils/errorHandler');

//Create new order = /api/order/new
exports.newOrder = expressAsyncHandler(async(req,res,next)=>{
    const {orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo} = req.body

    const order = await orderDB.create({

        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    })

    res.status(200).json({
        success: true,
        order
    })
})


//Get Single Order - api/order/:id
exports.getSingleOrder = expressAsyncHandler(async (req, res, next) => {
    const order = await orderDB.findById(req.params.id).populate('user', 'name email');
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

//Get Loggedin User Orders - /api/myorders
exports.myOrders = expressAsyncHandler(async (req, res, next) => {
    const orders = await orderDB.find({user: req.user.id});

    res.status(200).json({
        success: true,
        orders
    })
})

//Admin: Get All Orders - api/orders
exports.getAllOrders = expressAsyncHandler(async (req, res, next) => {
    const orders = await orderDB.find();

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})



//Admin: Update order / Order Status - api/order/:id
exports.updateOrder =  expressAsyncHandler(async (req, res, next) => {
    const order = await orderDB.findById(req.params.id);

    if(order.orderStatus == 'Delivered') {
        return next(new ErrorHandler('Order has been already delivered!', 400))
    }

    //Updating the product stock of each order item
    order.orderItems.forEach(async orderItem => {

        await updateStock(orderItem.product, orderItem.quantity)
    })

    order.orderStatus = req.body.orderStatus;
    order.deliveredAt = Date.now();
    await order.save(); 

    res.status(200).json({
        success: true
    })
    
});

async function updateStock (productId, quantity){

    const product = await productDB.findById(productId);
    product.stock = product.stock - quantity;
    product.save({validateBeforeSave: false})
}



//Admin: Delete Order - api/order/:id
exports.deleteOrder = expressAsyncHandler(async (req, res, next) => {
    const order = await orderDB.findById(req.params.id);
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }
    await orderDB.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true
    })
})