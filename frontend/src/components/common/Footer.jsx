import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
    <br />
    <Box 
      component="footer" 
      sx={{ borderTop: '1px solid #E0E0E0', py: 4, textAlign: 'center' }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Placement Portal
        </Typography>
        <Typography variant="body2" color="textSecondary">
          © 2024 ICT Academy. All rights reserved.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <IconButton 
          href="https://facebook.com" 
          color="primary" 
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton 
          href="https://x.com" 
          color="primary" 
          aria-label="Twitter"
        >
          <XIcon />
        </IconButton>
        <IconButton 
          href="https://linkedin.com" 
          color="primary" 
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
    </>
  );
};

export default Footer;
