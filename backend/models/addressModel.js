const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    addressList: [{
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        }
    }],
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
})

let orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;