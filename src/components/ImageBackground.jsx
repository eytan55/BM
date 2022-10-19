import React from 'react';
import style from './ImageBackground.module.css';
import shai1Img from '../assets/icons/shai1.jpeg';

const ImageBackground = props => {

    return <div className={style.container}>
            <img src={shai1Img} className={style.logoImg} alt="BMlogo"/>
      </div>;
 }

 export default React.memo(ImageBackground);