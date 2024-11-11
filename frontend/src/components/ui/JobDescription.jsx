import { Badge, Box, Button, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../common/Navbar'

const JobDescription = () => {
  const isApplied = false;
  return (
    <div>
      <Navbar /><br />
      <div>
        <Box display='flex' justifyContent="space-between" sx={{ marginLeft: "100px", marginRight: "120px" }}>
          <Typography variant="h5">Job title</Typography>
          <Button
            sx={{
              backgroundColor: isApplied ? '#D3D3D3' : '#fff',  // Gray if applied, white otherwise
              color: '#1976D2',
              fontWeight: 'bold',
              cursor: isApplied ? 'not-allowed' : 'pointer',    // Cursor changes based on applied state
              '&:hover': {
                backgroundColor: isApplied ? '#D3D3D3' : '#1976D2', // Blue background on hover if not applied
                color: isApplied ? '#1976D2' : '#fff',               // White text on hover if not applied
              },
            }}
            disabled={isApplied} // Optionally disable button when applied
          >
            {isApplied ? 'Already applied' : 'Apply Now'}
          </Button>
        </Box>
        <Box display="flex" gap={2} sx={{ marginLeft: "100px" }}>
          <Badge
            sx={{
              backgroundColor: '#DCDCDC',
              color: '#1976D2',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '4px 8px'
            }}
          >
            12 positions
          </Badge>
          <Badge
            sx={{
              backgroundColor: '#DCDCDC',
              color: '#1976D2',
              fontWeight: 'bold',
              borderRadius: '8px', // Add rounded edges
              padding: '4px 8px'
            }}
          >
            Part-Time
          </Badge>

          <Badge
            sx={{
              backgroundColor: '#DCDCDC',
              color: '#1976D2',
              fontWeight: 'bold',
              borderRadius: '8px', // Add rounded edges
              padding: '4px 8px'
            }}
          >
            24 LPA
          </Badge>
        </Box>
      </div>
      <br />
      <div  sx={{ marginTop: "10px" }}>
      <Typography variant="h5" sx={{ marginLeft: "100px" }}>Job Description</Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Role: <span style={{ marginLeft: '8px', color: '#757575' }}>Frontend Developer</span>
      </Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Location: <span style={{ marginLeft: '8px', color: '#757575' }}>Kochi</span>
      </Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Description: <span style={{ marginLeft: '8px', color: '#757575' }}></span>
      </Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Experience: <span style={{ marginLeft: '8px', color: '#757575' }}>2 yrs</span>
      </Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Salary: <span style={{ marginLeft: '8px', color: '#757575' }}>4 LPA</span>
      </Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Total Applicants: <span style={{ marginLeft: '8px', color: '#757575' }}>100</span>
      </Typography>

      <Typography variant="h6" sx={{ marginLeft: "100px" }}>
        Posted Date: <span style={{ marginLeft: '8px', color: '#757575' }}>10-11-2024</span>
      </Typography>
      </div>
    </div>
  )
}

export default JobDescription