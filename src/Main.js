import * as React from 'react';
//import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Header from './Header'
//import Content from './Content'
import CardImage from './CardImage'

function Main () {
    return (   
        <Container maxWidth="lg">
            <Header/>
            <CardImage />
        </Container>
    );
}

export default Main;