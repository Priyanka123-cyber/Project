const express=require('express');
const router=express.Router();
const {registerCompany, getCompany, getCompanyById,updateCompany}= require('../controller/company_controller')
const isAuthenticated=require('../middlewares/isAuthenticated');

router.post('/register',isAuthenticated,registerCompany);
router.get('/get',isAuthenticated,getCompany);
router.get('/get/:id',isAuthenticated,getCompanyById)
router.put('/update/:id',isAuthenticated,updateCompany)

module.exports=router;