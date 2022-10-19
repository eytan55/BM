import React, { useRef } from 'react';
import style from './Form.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: { 
          fontSize: 16,
          fontWeight: 600,
        },
    },  
  status: {
    danger: '#e53e3e',
  },
  palette: {
    doree: {
        main: '#E7CA76'
    },
    noir: {
        main: '#000000'
    }
  },
});

const Form = props => {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault(); 
        const email = 'Bmshai0511@gmail.com';
        const subject = 'Bar Mitsva Shai Présence';
        let body = '';
        body += 'Nom: ' + e.target.prenom.value + ' ' + e.target.nom.value + '    ';
        body += 'Assistera: ' + e.target.assistera.value + '    ';
        body += 'Nombre de personnes: ' + e.target.nbrPersonne.value + '    ';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
      };

    return <div className={style.container}>
             <article
      className={style.article}
      style={{ backgroundImage: `url(${'https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg'})` }}
    >
        <form ref={form} onSubmit={onSubmit}>
        <h1 className={style.header}>Votre réponse</h1>
        <div className={style.containerInputTop}>
        <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" name="nom" label="Nom" color='noir' variant="outlined" focused  />
    </ThemeProvider>
        </div>
        <div className={style.containerInput}>
        <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" name="prenom" label="Prénom" color='noir' variant="outlined" focused />
        </ThemeProvider>
        </div>
        <div className={style.containerInput}>
        <FormControl>
        <ThemeProvider theme={theme}>
      <FormLabel id="demo-radio-buttons-group-label" color='noir' focused>Assistera:</FormLabel>
      </ThemeProvider>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="oui"
        name="radio-buttons-group"
      >
        <ThemeProvider theme={theme}>
        <FormControlLabel value="oui" name='assistera' control={<Radio color='noir' />} label="Oui" />
        <FormControlLabel value="non" name='assistera' control={<Radio color='noir' />} label="Non" />
        </ThemeProvider>
      </RadioGroup>
    </FormControl>
    </div>
    <div className={style.containerInput}>
    <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" name="nbrPersonne" label="Combien de personnes?" color='noir' variant="outlined" focused  />
        </ThemeProvider>
        </div>
        <div className={style.containerInputBottom}>
        <ThemeProvider theme={theme}>
        <Button type="submit" variant="contained" color='doree'>Envoyer</Button>
        </ThemeProvider>
        </div></form></article>
      </div>
      ;
 }

 export default React.memo(Form);