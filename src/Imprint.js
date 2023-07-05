import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function Imprint(props) {
    const { onClose, ...other } = props;
    return (
        <Dialog fullWidth maxWidth='lg' onClose={onClose} {...other} >
            <DialogTitle>
                <Typography>{"IMPRESSUM"}</Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 18,
                        top: 8,
                        // color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography paragraph>Angaben gemäß § 5 TMG</Typography>
                    <Typography >Max Muster</Typography>
                    <Typography >Musterweg</Typography>
                    <Typography paragraph>12345 Musterstadt</Typography>

                    <Typography >Vertreten durch:</Typography>
                    <Typography paragraph>Max Muster</Typography>

                    <Typography  >Kontakt:</Typography>
                    <Typography >Telefon: 01234-789456</Typography>
                    <Typography >Fax: 1234-56789</Typography>
                    <Typography paragraph>E-Mail: max@muster.de</Typography>

                    <Typography >Registereintrag:</Typography>
                    <Typography >Eintragung im Registergericht: Musterstadt</Typography>
                    <Typography paragraph>Registernummer: 12345</Typography>

                    <Typography >Umsatzsteuer-ID:</Typography>
                    <Typography paragraph>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.</Typography>

                    <Typography >Wirtschafts-ID:</Typography>
                    <Typography paragraph>Musterwirtschaftsid</Typography>

                    <Typography >Aufsichtsbehörde:</Typography>
                    <Typography paragraph>Musteraufsicht Musterstadt</Typography>

                    <Typography paragraph>Haftungsausschluss:</Typography>

                    <Typography paragraph>Haftung für Inhalte</Typography>
                    <Typography paragraph>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </Typography >
                    <Typography >Quelle: impressum-generator.de/impressum-generator/</Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}