import { Badge, Box } from '@mui/material'
import React from 'react'

const JobCards = () => {
  return (
    <div>
        <Box
      sx={{
        border: '1px solid #DCDCDC',  
        boxShadow: '0 4px 6px #409cc4', 
        padding: 2, 
        borderRadius: 2, 
      }}
    >
      <h3 sx={{color:'#1d2c57'}}>Company Name</h3>
      <p>India</p>
      <div>
        <h3 sx={{ fontWeight: 'bold',color:'#1d2c57' }}>Job Title</h3>
        <p>Description</p>
      </div>
      
      <Box display="flex" gap={2}> {/* Flexbox container with gap between items */}
        <Badge
          sx={{
            backgroundColor: '#DCDCDC',
            color: '#10678c', 
            fontWeight: 'bold',
            borderRadius: '8px'
          }}
        >
          No. of Positions
        </Badge>

        <Badge
          sx={{
            backgroundColor: '#DCDCDC',
            color: '#3c4324', 
            fontWeight: 'bold',
            borderRadius: '8px'
          }}
        >
         Job Type
        </Badge>

        <Badge
          sx={{
            backgroundColor: '#DCDCDC',
            color: '#1d2c57', 
            fontWeight: 'bold',
            borderRadius: '8px'
          }}
        >
          Salary
        </Badge>
      </Box>
    </Box>
    </div>
  )
}

export default JobCards