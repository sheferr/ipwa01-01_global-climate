import * as React from 'react';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from './img/logo_356.png';
import Paper from '@mui/material/Paper'

function Logo()
{
  return <img src={Image} width="50" height="50" alignitems="center" alt="This should be a Logo"></img>
}

function HeaderBar() {
  return (
      <Box component={Paper} sx={{ justifyContent: 'center',  alignitems: 'center', p: 0.5}}>
        <Logo />
        <Button size="large">Über uns</Button>
        <Button size="large">Kontakt</Button>
      </Box>
  );
}


export default HeaderBar;
