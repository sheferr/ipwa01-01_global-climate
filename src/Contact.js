import React from 'react';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

export default function Contact() {

    // Variablen zur Speicherung der Einträge.
    const [UserName, setName] = React.useState('');
    const [UserEmail, setEmail] = React.useState('');
    const [UserTextField, setText] = React.useState('');

    // Textfelder-Status. false = normal, true = rot
    const [noNameEntry, setNoNameEntry] = React.useState(false);
    const [noEmailEntry, setNoEmailEntry] = React.useState(false);
    const [noTextEntry, setNoTextEntry] = React.useState(false);

    // Feedback popup
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    function submitContact() {
        // Aktualisiere alle Felder 
        const name = handleFocusName();
        const email = handleFocusEmail();
        const text = handleFocusText();

        // Nur, wenn alle Felder Befüllt sind, darf die Nachricht versendet werden.
        if ((name === true) || (email === true) || (text === true)) {
            console.log("Bitte alle Felder ausfüllen.");
        }
        else {
            console.log("User: " + UserName + " - Email: " + UserEmail + " - Text: " + UserTextField);
            setName('');
            setEmail('');
            setText('');
            setOpenSnackbar(true);
        }

    }

    const handleName = (event) => {
        if (!(event.target.value === '') && noNameEntry === true) {
            // Setze Feldfarbe auf normal
            setNoNameEntry(false);
        }
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        if (!(event.target.value === '') && noEmailEntry === true) {
            // Setze Feldfarbe auf normal
            setNoEmailEntry(false);
        }
        setEmail(event.target.value);
    }

    const handleText = (event) => {
        if (!(event.target.value === '') && noTextEntry === true) {
            // Setze Feldfarbe auf normal
            setNoTextEntry(false);
        }
        setText(event.target.value);
    }

    function handleFocusName() {
        let state = false;

        if (UserName === '') {
            // Feld ist leer
            state = true;
        }
        // aktualisiere Status
        setNoNameEntry(state);
        return state;
    }

    function handleFocusEmail() {
        let state = false;

        if (UserEmail === '') {
            // Feld ist leer
            state = true;
        }
        // aktualisiere Status
        setNoEmailEntry(state);
        return state;
    }

    function handleFocusText() {
        let state = false;
        if (UserTextField === '') {
            // Feld ist leer
            state = true;
        }
        // aktualisiere Status
        setNoTextEntry(state);
        return state;
    }

    return (
        <React.Fragment>
            <Card id={'id-contact'} sx={{ my: 3 }}>
                <CardHeader subheaderTypographyProps={{}} titleTypographyProps={{ variant: 'h4' }} title="Kontakt" subheader="Kontaktieren Sie uns, um sich über unser Engagement im Kampf gegen den Klimawandel auszutauschen und wie Sie Teil unserer Bemühungen werden können, eine nachhaltigere Zukunft zu gestalten."></CardHeader>
                <CardContent>
                    <TextField fullWidth margin='normal' error={noNameEntry} onChange={handleName} onBlur={handleFocusName} helperText={noNameEntry && "Bitte gib deinen Namen ein."} value={UserName} id='user-name-txt-field' label='Name' inputProps={{ inputMode: 'text' }} sx={{ display: 'block' }} />
                    <TextField fullWidth margin='normal' error={noEmailEntry} onChange={handleEmail} onBlur={handleFocusEmail} helperText={noEmailEntry && "Bitte gib deine E-mail-Adresse an."} value={UserEmail} id='email-txt-field' label='E-Mail' inputProps={{ inputMode: 'email' }} sx={{ display: 'block' }} />
                    <TextField fullWidth margin='normal' error={noTextEntry} onChange={handleText} onBlur={handleFocusText} helperText={noTextEntry && "Bitte gib deine Nachricht an."} value={UserTextField} id='filled-basic' multiline rows={6} label='Nachricht' inputProps={{ inputMode: 'text' }} sx={{ display: 'block' }} />
                    <Button variant='contained' onClick={submitContact}>Senden</Button>
                </CardContent>
            </Card>
            <Snackbar onClose={() => setOpenSnackbar(false)} open={openSnackbar} autoHideDuration={2000} message="Nachricht versendet." />
        </React.Fragment>
    );
}