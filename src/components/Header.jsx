import React from 'react';
import style from './Header.module.css';

const Header = props => {

    return <div className={style.container}>
            <div className={style.burgerMenuContainer}>
                <p className={style.texteStyle}>BM Shai Meir Marciano</p>
            </div>
      </div>;
 }

 export default React.memo(Header);