const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    categoryName: {
        type: String,
        required: true
    },
    subCategoryName1: {
        type: String,
        required: true
    },
    subCategoryName2: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

let categoryModel = mongoose.model('Category', orderSchema);

module.exports = categoryModel;