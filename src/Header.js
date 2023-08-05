import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

import Image from './img/GC_Logo.png';

function Logo() {
  return (
    <Box sx={{ float: 'left' }}>
      <img src={Image} height="50" alt="This should be a Logo"></img>
    </Box>
  )
}

export default function HeaderBar() {
  return (

    <Stack pr={1} pl={1} component={Paper} alignSelf='center' sx={{ width: 'auto' }} justifyContent="center" direction="row" spacing={1} flexWrap="wrap">
      <Logo />
      <Button size="large">Über uns</Button>
      <Button size="large">CO²-Emissionen</Button>
      <Button size="large">Kontakt</Button>
    </Stack>

  );
}
