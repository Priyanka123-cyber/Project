import { Avatar, Badge, Box, Button, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../common/Navbar'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AppliedJobTable from './AppliedJobTable';
import { useState } from 'react';
import UpdateProfileForm from './UpdateProfileForm';
import { useSelector } from 'react-redux';
const Profile = () => {
   
    const isResume = 'true';
    const [open, setOpen] = useState(false);
    const {user}=useSelector(store=>store.auth)
    return (
        <div>
            <Navbar /><br />
            <Box sx={{
                border: '1px solid #DCDCDC',
                boxShadow: '0 4px 6px #B0B0B0',
                padding: 2,
                borderRadius: 2
            }}>
                <Box display="flex" justifyContent="space-between" sx={{ marginLeft: '100px', marginRight: '100px' }}>
                    {/* Left-aligned content */}
                    <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
                        <Avatar
                            src={user.profile.profilePhoto}
                            sx={{ width: 56, height: 56 }}
                        />
                        <Box>
                            <Typography variant="h6">{user.fullname}</Typography>
                            <Typography variant="body2">{user.bio}</Typography>
                        </Box>
                    </Box>

                    {/* Right-aligned button */}
                    <Button color="primary" onClick={() => setOpen(true)}>
                        <EditOutlinedIcon />
                    </Button>
                </Box>

                {/* Email and phone icons below Avatar */}
                <Box display="flex" justifyContent="space-between" sx={{ marginLeft: '100px', marginRight: '100px', marginTop: 2 }}>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 1 }}>
                        <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
                            <EmailOutlinedIcon />
                            <span style={{ marginLeft: '8px' }}>{user.email}</span>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <PermContactCalendarOutlinedIcon />
                            <span style={{ marginLeft: '8px' }}>{user.phoneNumber}</span>
                        </Box>
                    </Box>
                </Box>

                {/* Skills section with badges in the same line */}
                <Box display="flex" alignItems="center" sx={{ marginLeft: '100px', marginRight: '100px', marginTop: 1 }}>
                    <Typography variant="body2" sx={{ marginRight: 2 }}>
                        Skills:
                    </Typography>

                    {/* Badge components */}
                    <Box display="flex" gap={2}>
                        {
                            user.profile.skills.length !== 0 ? (
                                user.profile.skills.map((item, index) => (
                                    <Badge
                                        key={index}
                                        sx={{
                                            backgroundColor: '#DCDCDC', // light grey background
                                            color: '#1976D2',  // blue text color
                                            fontWeight: 'bold',  // bold text
                                            padding: '8px 16px', // padding for badge
                                            borderRadius: '12px', // rounded corners
                                        }}
                                    >
                                        {item}
                                    </Badge>
                                ))
                            ) : (
                                <Typography>No skills available</Typography>
                            )
                        }
                    </Box>
                </Box>
                {/* Resume section aligned with above content */}
                <Box display="flex" alignItems="center" sx={{ marginLeft: '100px', marginRight: '100px', marginTop: 1 }}>
                    <label>Resume</label>
                    {
                        isResume ? <a href={user.profile.resume} style={{ marginLeft: '8px' }}>{user.profile.resumeOriginalName}</a> : null
                    }
                </Box>
                <Box alignItems="center" sx={{ marginLeft: '100px', marginRight: '100px', marginTop: 1 }}>
                    <Typography variant="h6">Applied Jobs</Typography>
                    <AppliedJobTable />
                </Box>
            </Box>
            <UpdateProfileForm open={open} onClose={() => setOpen(false)}/>        
            </div>
    )
}

export default Profile