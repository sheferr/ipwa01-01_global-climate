import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Imprint from './Imprint';
import Disclaimer from './Disclaimer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Footer() {
  const [dialogContent, setdialogContent] = React.useState("");

  function handleClickOpen({ type }) {
    setdialogContent(type);
  }

  const handleClose = () => {
    setdialogContent("none");
  };

  function FooterItem({ label, type }) {
    return (
      <Button color='inherit' size='small' onClick={() => handleClickOpen({ type })} >{label}</Button>
    )
  }
  //<FooterItem label='Datenschutzhinweise' type='policy' />
  return (
    <Paper elevation={1} sx={{ mt: 'auto', p: 1 }}>
      <Stack justifyContent="center" direction="row" spacing={2} flexWrap="wrap" divider={<Divider orientation="vertical" flexItem />}>
        <FooterItem label='Impressum' type='imprint' />
        <FooterItem label='Disclaimer' type='disclaimer' />
      </Stack>
      <Imprint open={dialogContent === 'imprint' ? true : false} onClose={handleClose} TransitionComponent={Transition} keepMounted scroll='paper' />
      <Disclaimer open={dialogContent === 'disclaimer' ? true : false} onClose={handleClose} TransitionComponent={Transition} keepMounted scroll='paper' />
    </Paper >
  );
}