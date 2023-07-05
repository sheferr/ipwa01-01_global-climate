import * as React from 'react';
//import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background:
        {
            default: '#565554',
            paper: '#565554',
        }
    },
});

export default function Main() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Content startYear={'1990'} endYear={'2019'} />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}