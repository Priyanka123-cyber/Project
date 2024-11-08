import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Avatar, Popover, List, ListItem, ListItemText} from '@mui/material';
import  {Link} from 'react-router-dom';
function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const user =false;

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Job Portal
                        </Typography>
                        <Link to={'/'}><Button variant="contained" color="primary">Home</Button></Link>
                        <Button color="inherit">Jobs</Button>
                        <Button color="inherit">Browse</Button>
                        
                        {
                            !user ? (
                                <>
                                 <Link to={'/login'}><Button variant="contained" color="primary">Login</Button></Link>
                                 <Link to={'/signup'}><Button variant="contained" color="primary">Sign-up</Button></Link>   
                                </>
                            ) : (
                                <Avatar
                                    aria-describedby="popover-avatar"
                                    src="/broken-image.jpg"
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
                    <ListItem>
                        <Avatar src="/broken-image.jpg" />
                        <ListItemText primary="User Name"
                            secondary={
                                <Typography variant="body2" color="text.secondary">
                                    Role
                                </Typography>
                            } />
                    </ListItem>
                    <ListItem button="true">
                        <ListItemText primary="View Profile" />
                    </ListItem>
                    <ListItem button="true">
                        <ListItemText primary="Logout" />
                    </ListItem>

                </List>
            </Popover>
        </div>
    );
}

export default Navbar;
