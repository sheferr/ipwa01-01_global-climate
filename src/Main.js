import * as React from 'react';
//import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


// <CardImage />
function Main() {
    return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Content startYear={'1990'} endYear={'2019'} />
            <Footer />
        </Container>
    );
}

export default Main;