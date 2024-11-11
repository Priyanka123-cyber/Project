import React from 'react'
import JobCards from './JobCards'
import { Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import store from '../../redux/store';

const NewListing = () => {

    const { allJobs } = useSelector(store => store.job);
    return (
        <div>
            <Typography sx={{
                color: '#1565C0',
                marginLeft: '100px',
                fontSize: '2rem',  // Increase font size
                fontWeight: 700    // Make font weight similar to h2
            }}>
                New Job Openings
            </Typography>
            <Grid2 container spacing={3} justifyContent="space-around" sx={{ marginLeft: '150px', marginRight: '150px' }}>
                {allJobs.length <= 0 ? (
                    <span>No Job Available</span>
                ) : (
                    allJobs.slice(0,6).map((job) => (
                        <Grid2 xs={12} sm={6} md={4} key={job._id}>
                            <LatestJobCards job={job} />
                        </Grid2>
                    ))
                )}
            </Grid2>


        </div>
    )
}

export default NewListing