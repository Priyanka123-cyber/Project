import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Avatar, Popover, List, ListItem, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/authSlice';

function Navbar() {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/user/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "An error occurred during logout");
        }
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Job Portal
                        </Typography>
                        <Link to={'/'}><Button variant="contained" color="primary">Home</Button></Link>
                        <Link to={'/jobs'}><Button variant="contained" color="primary">Jobs</Button></Link>
                        <Link to={'/browse'}><Button variant="contained" color="primary">Browse</Button></Link>

                        {
                            !user ? (
                                <>
                                    <Link to={'/login'}><Button variant="contained" color="primary">Login</Button></Link>
                                    <Link to={'/signup'}><Button variant="contained" color="primary">Sign-up</Button></Link>
                                </>
                            ) : (
                                <Avatar
                                    aria-describedby="popover-avatar"
                                    src={user.profile?.profilePhoto}  // Optional chaining to prevent errors
                                    onClick={handleClick}
                                />
                            )
                        }
                    </Toolbar>
                </AppBar>
            </Box>

            <Popover
                id="popover-avatar"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <List>
                    {/* Check if user exists and has properties to avoid errors */}
                    {user && user.fullname ? (
                        <ListItem>
                            <Avatar src={user.profile?.profilePhoto || "/broken-image.jpg"} />
                            <ListItemText 
                                primary={user.fullname}  // Safely access user.fullname
                                secondary={
                                    <Typography variant="body2" color="text.secondary">
                                        {user.role || "No role assigned"}  
                                    </Typography>
                                } 
                            />
                        </ListItem>
                    ) : (
                        <ListItem>
                            <ListItemText primary="Loading user..." />
                        </ListItem>
                    )}
                    <Button variant="text" onClick={() => navigate('/profile')}>
                        View Profile
                    </Button>

                    <Button variant="text" onClick={logout}>
                        Logout
                    </Button>
                </List>
            </Popover>
        </div>
    );
}

export default Navbar;
