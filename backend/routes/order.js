const express = require('express')
const router = express.Router()

const {isAuthenticateUser, authorisedRole} = require('../middleware/authenticate');
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require('../controllers/orderController');

router.route('/order/new').post(isAuthenticateUser,newOrder);
router.route('/order/:id').get(isAuthenticateUser,getSingleOrder);
router.route('/myorders').get(isAuthenticateUser,myOrders);

//Admin
router.route('/allorders').get(isAuthenticateUser,authorisedRole('admin'),getAllOrders);
router.route('/order/:id').put(isAuthenticateUser,authorisedRole('admin'),updateOrder);
router.route('/order/:id').delete(isAuthenticateUser,authorisedRole('admin'),deleteOrder);

module.exports = router


