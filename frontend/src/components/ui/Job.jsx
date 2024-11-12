import { Avatar, Badge, Box, Button, Typography } from '@mui/material'
import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link, useNavigate } from 'react-router-dom';

const Job = () => {
    const navigate = useNavigate();
    const id='gddf7gheug'

    const bstyles={
        color: '#1d2c57',  
        borderColor: '#1d2c57', 
        margin: '4px',   
        '&:hover': {
          borderColor: '#f5b300', // Outline color when hovered
          backgroundColor: '#f5b300', // Background color on hover (optional)
          color: 'white'           // Text color on hover (optional)
        }
      }
    
    return (
        <div>
            <div>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <p>2 days ago</p>
                    <Button className="rounded-full" size="small">
                        <BookmarkBorderIcon sx={{color:'#1d2c57'}}/>
                    </Button>
                </Box>

            </div>
            {/* Button with Company Logo */}
            <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                    src="https://static.vecteezy.com/system/resources/previews/007/422/332/non_2x/geometric-wolf-head-logo-icon-design-template-flat-vector.jpg"
                    alt="Company Logo"
                    sx={{ width: 48, height: 48 }}
                />
                <Box>
                    <Typography variant="h6">Company Name</Typography>
                    <Typography variant="body2">India</Typography>
                </Box>
            </Box>
            <div>
                <h4>Job Title</h4>
                <p>Job Description</p>
                <Box display="flex" gap={2}> {/* Flexbox container with gap between items */}
                    <Badge
                        sx={{
                            backgroundColor: '#DCDCDC',
                            color: '#10678c',
                            fontWeight: 'bold',
                            borderRadius: '8px', // Add rounded edges
                            padding: '4px 8px'
                        }}
                    >
                        position
                    </Badge>

                    <Badge
                        sx={{
                            backgroundColor: '#DCDCDC',
                            color: '#3c4324',
                            fontWeight: 'bold',
                            borderRadius: '8px', // Add rounded edges
                            padding: '4px 8px'
                        }}
                    >
                       jobtype
                    </Badge>

                    <Badge
                        sx={{
                            backgroundColor: '#DCDCDC',
                            color: '#1d2c57',
                            fontWeight: 'bold',
                            borderRadius: '8px', // Add rounded edges
                            padding: '4px 8px'
                        }}
                    >
                        salary
                    </Badge>
                </Box>
            </div><br />
            <div>
                <Button variant="outlined" sx={bstyles} onClick={() => navigate(`/description/:id`)} >Details</Button>
                <Button variant="outlined" sx={bstyles}>Save for Later</Button>
            </div>
        </div>
    )
}

export default Job