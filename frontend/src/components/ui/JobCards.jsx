import { Badge, Box } from '@mui/material'
import React from 'react'

const JobCards = (job) => {
  return (
    <div>
        <Box
      sx={{
        border: '1px solid #DCDCDC',  // White border color (light grey)
        boxShadow: '0 4px 6px #B0B0B0', // Grey shadow effect in hex
        padding: 2, //Adds padding inside the border
        borderRadius: 2, //Adds rounded corners to the border
      }}
    >
      <h3>{job.company.name}</h3>
      <p>India</p>
      <div>
        <h3 sx={{ fontWeight: 'bold' }}>{job.title}</h3>
        <p>{job.description}</p>
      </div>
      
      <Box display="flex" gap={2}> {/* Flexbox container with gap between items */}
        <Badge
          sx={{
            backgroundColor: '#DCDCDC',
            color: '#1976D2', 
            fontWeight: 'bold',
          }}
        >
          {job.position}
        </Badge>

        <Badge
          sx={{
            backgroundColor: '#DCDCDC',
            color: '#1976D2', 
            fontWeight: 'bold',
          }}
        >
         {job.jobType}
        </Badge>

        <Badge
          sx={{
            backgroundColor: '#DCDCDC',
            color: '#1976D2', 
            fontWeight: 'bold',
          }}
        >
          {job.salary}
        </Badge>
      </Box>
    </Box>
    </div>
  )
}

export default JobCards