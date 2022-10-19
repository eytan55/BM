import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import bmLogo from '../assets/icons/hat.png';
// import { slide as Menu } from 'react-burger-menu';
import Navbar from './Navbar';
// import ImageBackground from './ImageBackground';

const Header = props => {

    return <div className={style.container}>
            <div className={style.logoContainer}>
                <img src={bmLogo} className={style.logoImg} alt="BMlogo"/>
            </div>
            <div className={style.burgerMenuContainer}>
                {/* aaaa */}
                <Navbar />
                {/* <ImageBackground /> */}
            </div>
      </div>;
 }

 export default React.memo(Header);