import * as React from 'react';
//import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Header from './Header'
import Content from './Content'


// <CardImage />
function Main() {
    return (
        <Container maxWidth="lg">
            <Header />
            <Content startYear={'1990'} endYear={'2019'} />
        </Container>
    );
}

export default Main;