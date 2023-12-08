const express = require('express')
const router = express.Router()
const {isAuthenticateUser, authorisedRole} = require('../middleware/authenticate')

const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile,getAllUser,getUser,updateUser,deleteUser } = require('../controllers/authController')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.post('/password/forgot',forgotPassword)
router.post('/password/reset/:token',resetPassword)
router.put('/password/change',isAuthenticateUser,changePassword)
router.get('/myprofile',isAuthenticateUser,getUserProfile)
router.put('/update',isAuthenticateUser,updateProfile)


//admin
router.route('/admin/users').get(isAuthenticateUser,authorisedRole('admin'), getAllUser);
router.route('/admin/users/:id').get(isAuthenticateUser,authorisedRole('admin'), getUser)
                                .put(isAuthenticateUser,authorisedRole('admin'), updateUser)
                                .delete(isAuthenticateUser,authorisedRole('admin'), deleteUser);


module.exports = router