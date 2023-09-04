import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

// Sprache
import {
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

// mobile version imports
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

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

  const { setDirection } = props;

  const pages = ['Über uns', 'CO²-Emissionen', 'Kontakt'];
  const page_id = ['id-about', 'id-emissions', 'id-contact'];
  const languages = [{
    id: 0,
    lang: "Deutsch",
    dir: "ltr",
  }, {
    id: 1,
    lang: "English",
    dir: "ltr",
  }, {
    id: 2,
    lang: "Arabic",
    dir: "rtl",
  }];

  const [anchorNav, setAnchorNav] = React.useState(null);
  const [langSelect, setLangSelect] = React.useState(0);

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

  const handleChangeLang = (event) => {
    setLangSelect(event.target.value);
    setDirection(languages[event.target.value].dir);
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
              <Button key={page} size="large" onClick={() => handleClickScroll(page_id[index])}>{page}</Button>
            ))}
          </Box>

          <FormControl variant='filled' sx={{ minWidth: 110 }}>
            <InputLabel id="input_language_id">Sprache</InputLabel>
            <Select autoWidth labelId="input_language_id" id="label_lang_id" value={langSelect} onChange={e => handleChangeLang(e)}>
              {languages.map((lang, index) =>
                <MenuItem key={index} value={lang.id} >{lang.lang}</MenuItem>
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
                <MenuItem key={page} onClick={() => handleClickScroll(page_id[index])}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
