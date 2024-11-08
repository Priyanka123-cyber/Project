const express=require('express');
const router = express.Router();
const { applyJob, getAppliedJobs, getApplicants, updateStatus }=require('../controller/application_controller')
const isAuthenticated=require('../middlewares/isAuthenticated');

router.get('/apply/:id',isAuthenticated, applyJob);
router.get('/get',isAuthenticated, getAppliedJobs);
router.get('/:id/applicants',isAuthenticated, getApplicants);
router.post('/status/:id/update',isAuthenticated, updateStatus);


module.exports=router;