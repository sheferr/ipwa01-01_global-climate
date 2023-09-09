import * as React from 'react';
import {
  Button,
  Box,
  ButtonBase,
  Toolbar,
  Container
} from '@mui/material';

// Sprache
import {
  FormControl,
  InputLabel,
  Select,
  Link,
} from '@mui/material';
import languages from './Languages.json';

// mobile version imports
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
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

export default function Header(props) {

  const { language } = props;
  const pages = [
    {
      id: 'id-about',
      value: 'Über uns'
    },
    {
      id: 'id-emissions',
      value: 'CO²-Emissionen'
    },
    {
      id: 'id-contact',
      value: 'Kontakt'
    }];

  const [anchorNav, setAnchorNav] = React.useState(null);

  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setAnchorNav(null);
  }

  const handleOpenNavBar = (event) => {
    setAnchorNav(event.currentTarget);
  }

  const handleCloseNavBar = () => {
    setAnchorNav(null);
  }

  return (
    <AppBar position='static' sx={{ py: 1 }}>
      <Container maxWidth="lg" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Desktop-Ansicht */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button key={index} size="large" onClick={() => handleClickScroll(page.id)}>{page.value}</Button>
            ))}
          </Box>

          {/* Sprache */}
          <FormControl variant='filled' sx={{ minWidth: 110 }}>
            <InputLabel id="input_language_id">Sprache</InputLabel>
            <Select autoWidth labelId="input_language_id" id="label_lang_id" value={language.id}>
              {languages.map((lang, index) =>
                <MenuItem key={index} value={lang.id} ><Link href={lang.code} underline='none' color="white">{lang.lang}</Link></MenuItem>
              )}
            </Select>
          </FormControl>

          {/* Mobile-Ansicht */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color='primary' onClick={handleOpenNavBar}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorNav} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorNav)} onClose={handleCloseNavBar} sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => handleClickScroll(page.id)}>
                  <Typography textAlign="center">{page.value}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
