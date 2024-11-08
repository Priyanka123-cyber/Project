const express=require('express');
const router=express.Router();
const { postJob, getAllJobs, getAdminJobs, getJobById }= require('../controller/job_controller')
const isAuthenticated=require('../middlewares/isAuthenticated');

router.post('/post',isAuthenticated,postJob);
router.get('/get',isAuthenticated,getAllJobs);
router.get('/getadminjobs',isAuthenticated,getAdminJobs)
router.get('/get/:id',isAuthenticated,getJobById)

module.exports=router;