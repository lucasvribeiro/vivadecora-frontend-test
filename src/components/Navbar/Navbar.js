import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  const handleOptionSelected = () => {
    props.handleCloseNavbar();
  };

  return (
    <div>
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
          onClick={props.type === "mobile" ? handleOptionSelected : null}
          to="/"
        >
          FILMES NÃO CURADOS
        </Link>
        <Link
          onClick={props.type === "mobile" ? handleOptionSelected : null}
          to="/liked-movies"
        >
          FILMES CURTIDOS
        </Link>
        <Link
          onClick={props.type === "mobile" ? handleOptionSelected : null}
          to="/desliked-movies"
        >
          FILMES NÃO CURTIDOS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
