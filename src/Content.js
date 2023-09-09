import React from 'react';
import Box from '@mui/material/Box';

import About from './About';
import Contact from './Contact';
import Emissions from './Emissions';

export default function Content() {
  return (
    <React.Fragment>
      <Box pt={5}>
        <About />
        <Emissions startYear={'1990'} endYear={'2019'} />
        <Contact />
      </Box>
    </React.Fragment >
  );
}
