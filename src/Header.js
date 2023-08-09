import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';

import Image from './img/GC_Logo.png';



function Logo() {
  return (
    <Box sx={{ float: 'left' }}>
      <ButtonBase >
        <img onClick={() => window.location.reload(false)} src={Image} height="50" alt="This should be a Logo"></img>
      </ButtonBase>
    </Box>
  )
}

function handleClickScroll(id) {
  const element = document.getElementById(id);
  if (element) {

    element.scrollIntoView({ behavior: 'smooth' });
  }

}

export default function Header() {

  return (
    <React.Fragment>
      <Stack pr={1} pl={1} component={Paper} alignSelf='center' sx={{ width: 'auto' }} justifyContent="center" direction="row" spacing={1} flexWrap="wrap">
        <Logo />
        <Button size="large" onClick={() => handleClickScroll("id-about")}>Über uns</Button>
        <Button size="large" onClick={() => handleClickScroll("id-emissions")}>CO²-Emissionen</Button>
        <Button size="large" onClick={() => handleClickScroll("id-contact")}>Kontakt</Button>
      </Stack>
    </React.Fragment>
  )
}
