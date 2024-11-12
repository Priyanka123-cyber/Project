import { Box, Typography } from '@mui/material'
import React from 'react'

const TopSection = () => {
  return (
    <div>
      <br />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        height: '300px'  // Adjust height of the container
      }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#53a2b9',
            marginLeft: '200px',
          }}
        >
          Transforming <span style={{ color: '#104061', fontWeight: 'bold' }}>Skills</span> into
          <span style={{ color: '#dea512', fontWeight: 'bold' }}> Success</span>
        </Typography>

        <img
          src="https://www.greaserconsulting.com/wp-content/uploads/2022/12/Customer-Retention-Software.png"
          alt="Customer Retention Software"
          style={{
            maxWidth: '450px',
            height: 'auto',
            marginRight: '70px'
          }}
        />
      </Box>

    </div>
  )
}

export default TopSection