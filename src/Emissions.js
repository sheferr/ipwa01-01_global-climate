import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableSortLabel from '@mui/material/TableSortLabel';

import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import data from './csvjson.json'


const range = (start, end) => {
    let output = [];

    for (let i = start; i <= end; i++) {
        output.push(i);
    }
    return output;
}

export default function Emissions({ startYear, endYear }) {
    const [emissions, setEmissions] = React.useState(data);
    const [order, setOrder] = React.useState('asc');
    const [currYear, setCurrYear] = React.useState(endYear);
    const [isEmissionActive, setEmissionActive] = React.useState(false);
    const [countryValue, setCountryValue] = React.useState('');

    function reorderEmissionByCounterName() {
        setEmissionActive(false);
        if (order === 'asc') {
            setOrder('desc');
            setEmissions([...emissions].sort((a, b) =>
                a['Country Name'] > b['Country Name'] ? -1 : 1,
            ));
        }
        else {
            setOrder('asc');
            setEmissions([...emissions].sort((a, b) =>
                a['Country Name'] > b['Country Name'] ? 1 : -1,
            ));
        }
    }

    function reorderEmissionByValue() {
        setEmissionActive(true);
        if (order === 'asc') {
            setOrder('desc');
            setEmissions([...emissions].sort((a, b) =>
                a[currYear] > b[currYear] ? -1 : 1,
            ));
        }
        else {
            setOrder('asc');
            setEmissions([...emissions].sort((a, b) =>
                a[currYear] > b[currYear] ? 1 : -1,
            ));
        }
    }

    function updateYear(year) {
        setCurrYear(year);
        if (isEmissionActive) {
            if (order === 'asc') {
                setEmissions([...emissions].sort((a, b) =>
                    a[currYear] > b[currYear] ? 1 : -1,
                ));

            }
            else {
                setEmissions([...emissions].sort((a, b) =>
                    a[currYear] > b[currYear] ? -1 : 1,
                ));

            }
        }
    }


    function Form() {
        return (
            <FormControl variant="standard" >
                <InputLabel id="input_year_id">Jahr</InputLabel>
                <Select labelId="input_year_id" id="label_year_id" value={currYear} autoWidth onChange={(event) => updateYear(Number(event.target.value))} MenuProps={{ PaperProps: { sx: { minWidth: 80, maxHeight: 200, overflow: 'auto' } } }} >
                    {range(startYear, endYear).map((year) =>
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    }

    return (
        <React.Fragment>
            <Typography id={"id-emissions"} paragraph pt={5} variant='h4'>CO²-Emmisionen</Typography>
            <Typography paragraph>Die CO2-Emissions-Tabelle enthält detaillierte Daten über die jährlichen Treibhausgasemissionen von Ländern von 1990 bis 2019.
                Sie liefert einen klaren Überblick über die Veränderungen im Zeitverlauf und ermöglicht eine genaue Bewertung der individuellen Beiträge zum Klimawandel.
                Diese wichtige Ressource unterstützt Regierungen, Forschungseinrichtungen und Unternehmen bei der Entwicklung wirksamer Klimapolitiken und Maßnahmen zur Emissionsreduktion.
                Durch den Vergleich der Daten können internationale Kooperationen gestärkt und innovative Lösungen gefördert werden, um gemeinsam eine nachhaltigere Zukunft zu schaffen.
            </Typography>
            <TableContainer component={Paper} sx={{ height: 612, my: 2 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>
                                <TextField id="standard-basic" label="Land" variant="standard" size='small' onChange={(event) => { setCountryValue(event.target.value); }} />
                            </TableCell>
                            <TableCell align='left'><TableSortLabel direction={order} onClick={reorderEmissionByCounterName}>Ländercode</TableSortLabel></TableCell>
                            <TableCell align='left'><Form /></TableCell>
                            <TableCell align='left'><TableSortLabel direction={order} onClick={reorderEmissionByValue}>Emissionswert</TableSortLabel></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emissions.filter(item => item['Country Name'].toLowerCase().includes(countryValue.toLocaleLowerCase())).map((data, index) =>
                            <TableRow key={index}>
                                <TableCell align='left' >{data['Country Name']}</TableCell>
                                <TableCell align='left' >{data['Country Code']}</TableCell>
                                <TableCell align='left' >{currYear}</TableCell>
                                <TableCell align='left' >{data[currYear]}</TableCell>
                            </TableRow >
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </React.Fragment>
    );
}