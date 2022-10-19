import React from 'react';
import style from './ImageBackground3.module.css';
import fireworks from '../assets/icons/fireworks.png';

const ImageBackground3 = props => {

    return <div className={style.container}>
            <img src={fireworks} className={style.logoImg} alt="BMlogo"/>
      </div>;
 }

 export default React.memo(ImageBackground3);