import React from "react";

import menuIcon from "../../assets/menu-lateral.png";
import vivaDecoraLogo from "../../assets/logo-viva-decora.png";

import "./Header.css";

const Header = (props) => {
  const handleHamburguerMenuClick = () => {
    props.onHamburguerMenuClicked();
  };

  return (
    <div className="header">
      <div className="hamburguer-container">
        <img
          src={menuIcon}
          onClick={handleHamburguerMenuClick}
          className="hamburguer-menu"
          alt="Toggle"
        />
      </div>

      <div className="logo-container">
        <a href="/">
          <img src={vivaDecoraLogo} alt="Toggle" />
        </a>
      </div>
    </div>
  );
};

export default Header;
