import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';

const FirstNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Yellow Rectangle with UN in the middle */}
          <Box sx={{ backgroundColor: '#ffc107', padding: '0 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', height: '100%' }}>
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
              UN
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', marginLeft: '2px' }}>
            common
          </Typography>
        </Box>
        
        {/* Updated Part with Bell Icon and Avatar */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          
          {/* Bell Icon */}
          <NotificationsIcon sx={{ color: 'black' }} />

          {/* Avatar and User Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ bgcolor: '#ffc107', color: '#ffffff', fontWeight: 'bold' }}>S</Avatar>
            <Box>
              <Typography variant="body1" sx={{ color: 'black', lineHeight: '1' }}>Shreyasi</Typography>
              <Typography variant="body2" sx={{ color: '#7c7c7c', lineHeight: '1' }}>shreyasichatterg@gmail.com</Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FirstNavbar;
