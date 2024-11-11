import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllJobs } from '../../redux/jobSlice';
import axios from 'axios'; 

export const useGetAllJobs = () => {
    const dispatch=useDispatch();
 useEffect(()=>{
    const fetchAllJobs=async()=>{
        try {
            const res= await axios.get('http://localhost:8000/api/job/get',{withCredentials:true})
            if(res.data.success){
               dispatch(setAllJobs(res.data.jobs))
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchAllJobs();
 },[])
}


