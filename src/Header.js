import * as React from 'react';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/* <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          
          sx={{ flex: 1, pb: 2}}
        >
          Global Climate
        </Typography> */

function HeaderBar() {
  return (
      <Box sx={{ justifyContent: 'center', textAlign:'center', alignItems: 'center', p: 2}}>
        <Button size="large" >Startseite</Button>
        <Button size="large">Über uns</Button>
        <Button size="large">Kontakt</Button>
      </Box>
  );
}


export default HeaderBar;
