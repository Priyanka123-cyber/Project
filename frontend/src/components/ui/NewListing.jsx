import React, { useEffect, useState } from 'react'
import JobCards from './JobCards'
import { Grid2, Typography } from '@mui/material';
import axios from 'axios';




const NewListing = () => {

    const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
   
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/job/get"); // Adjust URL as needed
                setAllJobs(response.data); // Update the local state with job data
                console.log("Fetched jobs:", response.data); // Log fetched data
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchJobs();
    }, []); 
    
    return (
        <div>
            <Typography sx={{
                color: '#104061',
                marginLeft: '100px',
                marginRight:'100px',
                backgroundColor:'#d1eaee',
                fontSize: '2rem',
                fontWeight: 700,
                border: '2px solid #104061',  // Adds border
                borderRadius: '8px',  // Rounds the corners
                padding: '8px 16px',  // Optional padding for spacing inside the border
            }}>
                New Job Openings
            </Typography><br />
            <Grid2 container spacing={3} justifyContent="space-around" sx={{ marginLeft: '150px', marginRight: '150px' }}>
                {randomJobs.length <= 0 ? (
                    <span>No Job Available</span>
                ) : (
                    randomJobs.slice(0, 6).map((job) => (
                        <Grid2 xs={12} sm={6} md={4} key={job._id}>
                            <JobCards job={job} />
                        </Grid2>
                    ))
                )}
            </Grid2>


        </div>)

}

export default NewListing