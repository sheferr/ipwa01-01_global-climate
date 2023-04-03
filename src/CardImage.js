import * as React from 'react';
import CardMedia from '@mui/material/CardMedia'
import image from './img/water1.png'

export default function CardImage() {
    return (
        <CardMedia
            component="img"
            sx={{ boxShadow: 3, borderRadius: 2, display: {xs: 'none', sm: 'block'} }} 
            src={image}
        />
    );
  }
  