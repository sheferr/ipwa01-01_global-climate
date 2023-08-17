import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

// mobile version imports
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Logo importieren
import Image from './img/GC_Logo.png';

function Logo(props) {
  const { left, sx } = props;
  return (
    <Box sx={sx}>
      <ButtonBase sx={{ left: left }} >
        <img onClick={() => window.location.reload(false)} src={Image} height="50" alt="This should be a Logo"></img>
      </ButtonBase>
    </Box >
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
    <AppBar position='static' sx={{ py: 1 }}>
      <Container maxWidth="lg" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Desktop-Ansicht */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button size="large" onClick={() => handleClickScroll("id-about")}> Über uns </Button>
            <Button size="large" onClick={() => handleClickScroll("id-emissions")}> CO²-Emissionen </Button>
            <Button size="large" onClick={() => handleClickScroll("id-contact")}> Kontakt </Button>
          </Box>

          {/* Mobile-Ansicht */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color='primary'>
              <MenuIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
