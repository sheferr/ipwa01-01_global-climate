import React from 'react';
//import Paper from '@mui/material/Paper';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Image from './img/windmill-org.jpg';

const theme = createTheme();

export default class Content extends React.Component {
  render (){
    return (
      <ThemeProvider theme={theme}>
        <Grid container maxWidth="lg" component="main" sx={{ height: '130vh' }}>
          <CssBaseline />
          <Grid
          item
          xs={false}
          sm={4}
          md={12}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
          />
        </Grid>
      </ThemeProvider>
    )
  }
  
}

