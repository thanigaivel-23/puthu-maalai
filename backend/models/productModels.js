const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "xxxx please enter product name"],
    trim: true,
    maxLength: [100, "product name cannot exceed 100 characters"],
  },

  price: {
    type: Number,
    required: [true, "please enter price"],
    trim: true,
  },

  discount: {
    type: Number,
    required: [true, "please enter discount"],
  },

  colors: [
    {
      type: String,
      trim: true,
      lowercase: true,
      require: [true, "please enter color"]
    }
  ],

  size: [
    {
      type: String,
      trim: true,
      uppercase: true,
      require: [true, "please enter size"]
    }
  ],
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  brand: String,
  type: String,
  fabric: String,
  style: String,
  sizeAndFit: String,

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      image: {
        type: String,
        required: [true, "please add at least one images"]
      },
    },
    
  ],

  category: {
    type: String,
    uppercase: true,
    required: [true, "please enter product category"],
  },

  seller: {
    type: String,
    required: [true, "please enter product seller"],
  },

  stock: {
    type: Number,
    required: [true, "please product stock"],
  },


  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('product', productSchema);