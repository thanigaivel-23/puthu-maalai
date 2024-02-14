const express = require("express")
const { isAuthenticateUser } = require('../middleware/authenticate')

const createCategory = require('../controllers/categoryController')

const router = express.Router()

router.post('/admin/createCategory', isAuthenticateUser, createCategory)


module.exports = router