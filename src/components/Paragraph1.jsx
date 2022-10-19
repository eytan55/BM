import React from 'react';
import style from './Paragraph1.module.css';
// import bmLogo from '../assets/icons/hat.png';
// import { slide as Menu } from 'react-burger-menu';
// import Navbar from './Navbar';
// import ImageBackground from './ImageBackground';

const Paragraph1 = props => {

    return <div className={style.container}>
     <article
      className={style.article}
      style={{ backgroundImage: `url(${'https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg'})` }}
    >
      <h1 className={style.header}>Mise des Téfilines</h1>
      <p className={style.texteStyle}>Vendredi 4 Novembre 2022</p> 
      <p className={style.texteStyle}>à 8H30 Synagogue d'Enghien-les-Bains</p> 
      <p className={style.texteStyle}>47 rue de Malleville,</p> 
      <p className={style.texteStyle}>95880, Enghien-les-Bains</p>
    <p className={style.texteStyle}>L'office sera suivi d'un Brunch</p>
    </article>
        {/* <div className={style.imgBackgroundContainer}>
        <img className={style.imgBackground} src="https://static.wixstatic.com/media/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg/v1/fill/w_233,h_700,al_c,q_80,enc_auto/4240b2_97c78daf154c4d73a68bee0d0531eb53~mv2.jpeg" alt="e5abe2a191683fcb3369fdf2dde90c19.jpeg"></img>
            <div className={style.textcontainer}>
                <p>Shaï et sa famille vous prie de bien vouloir l'honorer de votre présence pour célébrer sa Bar Mitsva </p>
                </div>
        </div> */}
      </div>;
 }

 export default React.memo(Paragraph1);