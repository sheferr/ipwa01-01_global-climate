import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import  FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import data from './csvjson.json'

const range = (start, end) => {
  let output = [];

  if (typeof end === 'undefined')
  {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i ++)
  {
    output.push(i);
  }

  return output;
}

export default function Content() {
  const [year, setAge] = React.useState(2019);
  const yearStart = 1990;
  const yearEnd = 2022;

  function Form ()
  {
    const handleChange = (event) => {
    setAge(event.target.value);
  }

  return (
      <FormControl variant="standard" >
        <InputLabel id="input_year_id">Jahr</InputLabel>
        <Select labelId="input_year_id" id="label_year_id" value={year} autoWidth onChange={handleChange} MenuProps={{ PaperProps:{ sx:{ minWidth: 80,  maxHeight: 200, overflow: 'auto'}}}} >
        {range(yearStart, yearEnd).map((year) => 
          <MenuItem key={year} value={year}>{year}</MenuItem>
        )}
        </Select>
      </FormControl>
    )
  }

  return (
    <TableContainer component={Paper} sx={{maxHeight: 500, mt: 5}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Land</TableCell>
            <TableCell align='left'>Ländercode</TableCell>
            <TableCell align='left'><Form /></TableCell>
            <TableCell align='left'>Emissionswert</TableCell>
          </TableRow>
        </TableHead>
        {data.map((data,i) => 
          <TableBody key={i}>
            <TableRow>
              <TableCell align='left' >{data['Country Name']}</TableCell>
              <TableCell align='left' >{data['Country Code']}</TableCell>
              <TableCell align='left' >{year}</TableCell>
              <TableCell align='left' >{data[year]}</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}