import * as React from 'react';
//import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper'

export default function CardImage() {
    return (
      <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'center', backgroundPosition: 'center', backgroundImage: 'url(${Image})' }}>

      </Paper>
    );
  }
  