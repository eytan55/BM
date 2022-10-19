import React, { useState } from "react";
// import './Navbar.module.css';
import style from './Navbar.module.css';
import burgerMenu from '../assets/icons/burgerMenu.png';
// import ImageBackground from './ImageBackground';

const Navbar = props => {
  // const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    // if(!isMenuClicked) {
        // setBurgerClass("burger-bar clicked")
        // setMenuClass("menu visible")
    // }
    // else {
        // setBurgerClass("burger-bar unclicked")
        // setMenuClass("menu hidden")
    // }
    setIsMenuClicked(!isMenuClicked)
}

  return <div className={style.container}>
  <nav>
   <div>
    <img src={burgerMenu} className={style.burgerMenuIcon} onClick={() => setIsMenuClicked(!isMenuClicked)} alt="burgerMenuIcon"/>
    </div>
      {/* <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} >hello1</div>
          <div className={burger_class} >hello2</div>
          <div className={burger_class} >hello3</div>
      </div> */}
  </nav>
 
  <div className={isMenuClicked ? style.burgerClicked : style.burgerUnClicked}>
    <ul>
      <li>Home</li>
      <li>Mise des Téfilines</li>
      <li>Lecture de la Torah</li>
      <li>La soirée</li>
    </ul>
  </div>
  {/* <ImageBackground /> */}
</div>;
}

export default React.memo(Navbar);
