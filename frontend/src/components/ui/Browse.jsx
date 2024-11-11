import React from 'react'
import Job from './Job';
import { Grid2 } from '@mui/material';
import Navbar from '../common/Navbar';

const Browse = () => {
    const randomJobs=[1,2,3];
  return (
    <div>
        <Navbar/>
    <h2>Search Results ({randomJobs.length})</h2>
    <Grid2 container spacing={3} sx={{ marginLeft: '150px', marginRight: '150px' }}>
        {randomJobs.map((item, index) => (
            <Grid2
                xs={12} sm={6} md={4} key={index}
                sx={{
                    padding: 5,
                    borderRadius: 2,
                    boxShadow: 4,
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.100',
                }}
            >
                <Job job={item} />
            </Grid2>
        ))}
    </Grid2>
</div>
  )
}

export default Browse