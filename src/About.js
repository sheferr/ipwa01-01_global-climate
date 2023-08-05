import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import Earth from './img/globe.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
});

export default function About() {


    return (
        <React.Fragment>

            <Grid container spacing={2} borderRadius={5} borderTop={4} borderBottom={4} borderColor={'gray'} mb={2}>
                <Grid item xs={12} sm={6} md={8} lg={8} alignSelf='center' >
                    <Typography paragraph variant='h4'>Über uns</Typography>
                    <Typography paragraph>Global Climate ist eine Non-Profit-Organisation, die den globalen Klimawandel bekämpft.
                        Wir setzen uns leidenschaftlich dafür ein, Bewusstsein zu schaffen, innovative Lösungen zu entwickeln und Zusammenarbeit zu fördern.
                        Unser Team aus Experten arbeitet mit Regierungen, Unternehmen und Gemeinden zusammen, um nachhaltige Praktiken zu fördern und politische Maßnahmen voranzutreiben.
                        Durch Forschung, Bildung und Partnerschaften streben wir eine nachhaltige und gerechte Zukunft für unseren Planeten an.
                        Gemeinsam können wir den Klimawandel bewältigen und eine positive Veränderung für kommende Generationen schaffen.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} my={2} alignSelf='center' >
                    <Img src={Earth} alt="Green transparent earth logo."></Img>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}