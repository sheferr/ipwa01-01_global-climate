import React from 'react';
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Container from '@mui/material/Container';
//<AppBar position = "static" color = 'success' className={'alignItems: "center"'} sx={{ maxWidth: '50%', borderRadius: 4 }}>
function HeaderBar() {
  return (
    <div>
      <AppBar position = "static" className={'alignItems: "center"'}>
        <Toolbar disableGutters></Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;
