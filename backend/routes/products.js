const express = require("express");
const router = express.Router();
const {isAuthenticateUser, authorisedRole} = require('../middleware/authenticate');
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct, createReview, getReview, deleteReview
} = require("../controllers/productsControllers");

router.get("/products", getProducts);
router.get("/product/:id", getSingleProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

//reviews
router.put('/review',isAuthenticateUser, createReview)
router.get('/reviews', getReview)
router.delete('/review', deleteReview)


//Admin 
router.post("/admin/products/new",isAuthenticateUser,authorisedRole('admin'), newProduct);

module.exports = router;
