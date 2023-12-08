const expressAsyncHandler = require("express-async-handler");
const userDB = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwt');
const sendmail = require("../utils/email");
const crypto = require('crypto')

//Register user - /api/register
exports.registerUser = expressAsyncHandler(async(req,res)=>{

    const {name, email, password, avatar} = req.body;
    const user = await userDB.create({
        name, email, password, avatar
    });

    sendToken(user, 201, res)
    
})

//Login user - /api/login
exports.loginUser = expressAsyncHandler(async(req,res, next)=>{

    const {email, password} = req.body;

    if(!email || !password) {
        return next(new ErrorHandler('please enter email & password',400))
    }

    //finding the user from database
    const user = await userDB.findOne({email}).select('+password')

    if(!user){
        return next(new ErrorHandler('Invalid email or password',401))
    }

    if(! await user.isValidPassword(password)){
        return next(new ErrorHandler('Invalid email or password',401))
    }

    sendToken(user, 201, res)

})

//Logout user - /api/logout
exports.logoutUser = (req,res,next) =>{
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    .status(200)
    .json({
        success: true,
        message: 'logged out'
    })
}

//Forgot Password - /api/fogotpassword
exports.forgotPassword = expressAsyncHandler(async(req,res,next)=>{

    const user = await userDB.findOne({email: req.body.email})

    if(!user){
        return next(new ErrorHandler('user not found with this email id',404))
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave: false})

    //create reset url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/password/reset/${resetToken}`

    const message = `Your password reset is as follows \n\n
    ${resetUrl} \n\n If you have not requested this email, then ignore it`

    try {
        
        sendmail({
            email: user.email,
            subject: 'Pudhumaalai Password Recovery',
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email}`
        })
        
    } 
    catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;
        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler(error.message),500 )
    }


})

//Reset password - /api/password/reset/:token
exports.resetPassword = expressAsyncHandler(async(req,res,next)=>{
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await userDB.findOne({
        resetPasswordToken,
        resetPasswordTokenExpire: {
            $gt : Date.now()
        }})

    if(!user){
        return next(new ErrorHandler('Password reset token is invalid or expired'))
    }
    if(!req.body.password || !req.body.confirmPassword){
        return next(new ErrorHandler('Password cannot be empty'))
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler('Password does not match'))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordTokenExpire = undefined
    await user.save({validateBeforeSave: false})

    sendToken(user, 201, res)


})

//Get user profile
exports.getUserProfile = expressAsyncHandler(async(req,res,next)=>{
    const user = await userDB.findById(req.user.id)
    res.status(200).json({
        success: true,
        user
    })
})


//Change Password - /api//password/change
exports.changePassword = expressAsyncHandler(async(req,res,next)=>{
    const user = await userDB.findById(req.user.id).select('+password')

    if(!req.body.oldPassword || !req.body.newPassword){
        return next(new ErrorHandler('Password cannot be empty'))
    }    

    //check old password
    if(!await user.isValidPassword(req.body.oldPassword)){
        return next(new ErrorHandler('old password is incorrect'),401)
    }

    //assigning new password
    user.password = req.body.newPassword
    await user.save();

    res.status(200).json({
        success: true
    })
})

//Update Profile - 
exports.updateProfile = expressAsyncHandler(async(req,res,next)=>{
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    const user = await userDB.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Admin: Get All User api/admin/users
exports.getAllUser = expressAsyncHandler(async(req,res,next)=>{
    const user = await userDB.find();
    res.status(200).json({
        success: true,
        user
    })
})

//Admin: Get Specific User - api/admin/user/:id
exports.getUser = expressAsyncHandler(async (req, res, next) => {
    const user = await userDB.findById(req.params.id);
    if(!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        user
   })
});

//Admin: Update User - api/admin/user/:id
exports.updateUser = expressAsyncHandler(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await userDB.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Admin: Delete User - api/admin/user/:id
exports.deleteUser = expressAsyncHandler(async (req, res, next) => {
    
    const user = await userDB.findByIdAndDelete(req.params.id);
    if(!user) {
        return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
    }
    res.status(200).json({
        success: true
    })
})