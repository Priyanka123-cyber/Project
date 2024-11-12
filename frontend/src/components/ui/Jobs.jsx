import React from 'react'
import Navbar from '../common/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { Box, Grid2 } from '@mui/material'

const Jobs = () => {
    const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16]
    return (
        <div>
            <Navbar />
            <br />
            <Box display="flex" justifyContent="space-between" >
            <FilterCard/>
            {
                jobsArray.length <= 0 ? (
                    <span>Job not found</span>
                ) : (
                    <Grid2 container spacing={3} justifyContent="space-around" sx={{ marginLeft: '60px', marginRight: '60px' }}>
                        {jobsArray.map((item, index) => (
                            <Grid2 xs={12} sm={6} md={4} key={index} sx={{
                                    border: '1px solid #DCDCDC',  
                                    boxShadow: '0 4px 6px #409cc4', 
                                    padding: 2, 
                                    borderRadius: 2, 
                            }}>
                                <Job job={item} /> 
                            </Grid2>
                        ))}
                    </Grid2>
                )
            }
            </Box>
        </div>
    )
}

export default Jobs
