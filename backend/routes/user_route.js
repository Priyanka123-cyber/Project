const express=require('express');
const router=express.Router();
const { login, logout, register, updateProfile } = require('../controller/user_controller')
const isAuthenticated=require('../middlewares/isAuthenticated');


const jwt=require("jsonwebtoken")

router.post('/register',register)
router.post('/login', login);
router.post('/profile/update',isAuthenticated,updateProfile);
router.get('/logout',logout)


module.exports = router;