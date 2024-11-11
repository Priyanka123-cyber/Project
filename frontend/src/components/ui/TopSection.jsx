import { Box, Typography } from '@mui/material'
import React from 'react'

const TopSection = () => {
  return (
    <div>
       <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px", 
        backgroundColor: "#FFFFFF", 
        color: "#1976D2", // Text color
        textAlign: "center",
      }}      
    >
      <Typography variant="h2" component="h2" sx={{ fontWeight: "bold" }}>
        Transforming Skills into Success
      </Typography>
    </Box>
    </div>
  )
}

export default TopSection