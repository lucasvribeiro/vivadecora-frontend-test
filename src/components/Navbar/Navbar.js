import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(location.pathname);

  const handleOptionSelected = (option) => {
    setSelectedMenu(option);

    if (props.type === "mobile") {
      props.handleCloseNavbar();
    }
  };

  return (
    <div className="navbar">
      <div
        className={
          props.type === "mobile"
            ? props.state
              ? "sections-mobile"
              : "sections-mobile sections-mobile-closed"
            : "sections-web"
        }
      >
        <Link
          className={
            selectedMenu === "/home" || selectedMenu === "/"
              ? "selected-link"
              : ""
          }
          onClick={() => handleOptionSelected("/home")}
          to="/"
        >
          FILMES NÃO CURADOS
        </Link>
        <Link
          className={selectedMenu === "/liked-movies" ? "selected-link" : ""}
          onClick={() => handleOptionSelected("/liked-movies")}
          to="/liked-movies"
        >
          FILMES CURTIDOS
        </Link>
        <Link
          className={selectedMenu === "/desliked-movies" ? "selected-link" : ""}
          onClick={() => handleOptionSelected("/desliked-movies")}
          to="/desliked-movies"
        >
          FILMES NÃO CURTIDOS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
