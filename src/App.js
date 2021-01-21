import React, { useState } from "react";

// import Header from "./components/Header/Header";
// import SideMenu from "./components/SideMenu/SideMenu";

import menuIcon from "./assets/menu-lateral.png";
import vivaDecoraLogo from "./assets/logo-viva-decora.png";

import "./App.css";

function App() {
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = () => {
    setMenuState(!menuState);
  };

  return (
    <div>
      <div className="menu">
        <div
          className={
            menuState ? "side-menu-items" : "side-menu-items closed-side-menu"
          }
        >
          <a href="a">FILMES NÃO CURADOS</a>
          <a href="b">FILMES CURTIDOS</a>
          <a href="c"> FILMES NÃO CURTIDOS</a>
        </div>

        <div className="header">
          <div className={menuState ? "header-icon" : "header-icon closed"}>
            <img onClick={changeMenuState} src={menuIcon} alt="Menu" />
          </div>

          <div className="header-logo">
            <img src={vivaDecoraLogo} alt="Logo" />
          </div>
        </div>
      </div>

      <div className={menuState ? "page-content" : "page-content closed"}>
        <div>Content</div>
      </div>
    </div>
  );
}

export default App;
