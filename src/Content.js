import React from 'react';
//import Paper from '@mui/material/Paper';
import Image from './windmill.png';

const styles2 = {
  paperContainer: {
      height: 1282,
      backgroundImage: `url(${Image})`,
  }
};

export default class Content extends React.Component {
  render (){
    return (
      <div style={styles2.paperContainer}>
      </div>
    )
  }
  
}

