const express=require('express');
const router=express.Router();
const { login, logout, register, updateProfile } = require('../controller/user_controller')
const isAuthenticated=require('../middlewares/isAuthenticated');
const singleUpload=require('../middlewares/multer')


const jwt=require("jsonwebtoken")

router.post('/register',singleUpload,register)
router.post('/login', login);
router.post('/profile/update',isAuthenticated,singleUpload,updateProfile);
router.get('/logout',logout)


module.exports = router;