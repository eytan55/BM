import React, { useState, useEffect } from 'react';
import style from './Form.module.css';
import Box from '@mui/material/Box';
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

        button: { // Here is where you can customise the button
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


// import bmLogo from '../assets/icons/hat.png';
// import { slide as Menu } from 'react-burger-menu';
// import Navbar from './Navbar';
// import ImageBackground from './ImageBackground';

const Form = props => {

    return <div className={style.container}>
             <article
      className={style.article}
      style={{ backgroundImage: `url(${'https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg'})` }}
    >
        <h1 className={style.header}>Votre réponse</h1>
        <div className={style.containerInputTop}>
        <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" label="Nom" color='noir' variant="outlined" focused  />
    </ThemeProvider>
        {/* <TextField id="outlined-basic" label="Nom" color='doree' variant="outlined" /> */}
        </div>
        <div className={style.containerInput}>
        <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" label="Prénom" color='noir' variant="outlined" focused />
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
        <FormControlLabel value="oui" control={<Radio color='noir' />} label="Oui" />
        <FormControlLabel value="non" control={<Radio color='noir' />} label="Non" />
        </ThemeProvider>
      </RadioGroup>
    </FormControl>
    </div>
    <div className={style.containerInput}>
    <ThemeProvider theme={theme}>
        <TextField id="outlined-basic" label="Combien de personnes?" color='noir' variant="outlined" focused  />
        </ThemeProvider>
        </div>
        <div className={style.containerInputBottom}>
        <ThemeProvider theme={theme}>
        <Button variant="contained" color='doree'>Envoyer</Button>
        </ThemeProvider>
        </div></article>
      </div>
      ;
 }

 export default React.memo(Form);