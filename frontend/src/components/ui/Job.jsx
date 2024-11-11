import { Avatar, Badge, Box, Button, Typography } from '@mui/material'
import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link, useNavigate } from 'react-router-dom';

const Job = () => {
    const navigate = useNavigate();
    const jobId = 'guife76gfe76';
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
                        <BookmarkBorderIcon />
                    </Button>
                </Box>

            </div>
            {/* Button with Company Logo */}
            <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                    src="https://img.favpng.com/20/20/12/final-fantasy-type-0-hd-desktop-wallpaper-microsoft-display-resolution-png-favpng-0Fn0vJLaaFw9aZA3V2ETc3S8L.jpg"
                    alt="Company Logo"
                    sx={{ width: 48, height: 48 }}
                />
                <Box>
                    <Typography variant="h6">Company Name</Typography>
                    <Typography variant="body2">India</Typography>
                </Box>
            </Box>
            <div>
                <h4>Title</h4>
                <p>Description</p>
                <Box display="flex" gap={2}> {/* Flexbox container with gap between items */}
                    <Badge
                        sx={{
                            backgroundColor: '#DCDCDC',
                            color: '#1976D2',
                            fontWeight: 'bold',
                            borderRadius: '8px', // Add rounded edges
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
            </div><br />
            <div>
                <Button variant="outlined" color="primary" onClick={() => navigate(`/description/:${jobId}`)} >Details</Button>
                <Button variant="outlined" color="primary">Save for Later</Button>
            </div>
        </div>
    )
}

export default Job