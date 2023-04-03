import * as React from 'react';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
