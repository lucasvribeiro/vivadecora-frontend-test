import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import menuIcon from "./assets/menu-lateral.png";
import vivaDecoraLogo from "./assets/logo-viva-decora.png";

import Home from "./pages/Home/Home";
import LikedMovies from "./pages/LikedMovies/LikedMovies";
import DeslikedMovies from "./pages/DeslikedMovies/DeslikedMovies";

import "./App.css";

function App() {
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = () => {
    setMenuState(!menuState);
  };

  return (
    //   <Router>
    //         <Link to="/">Home</Link>
    //         <Link to="/about">About</Link>
    //         <Link to="/dashboard">Dashboard</Link>

    // </Router>
    <Router>
      <div className="app">
        <div
          className={
            menuState
              ? "sections-mobile"
              : "sections-mobile sections-mobile-closed"
          }
        >
          <Link onClick={changeMenuState} to="/">FILMES NÃO CURADOS</Link>
          <Link onClick={changeMenuState} to="/desliked-movies">FILMES CURTIDOS</Link>
          <Link onClick={changeMenuState} to="/liked-movies">FILMES NÃO CURTIDOS</Link>
        </div>

        <div className="body-content">
          <div className="header">
            <div className="hamburguer-container">
              <img
                src={menuIcon}
                onClick={changeMenuState}
                className="hamburguer-menu"
                alt="Toggle"
              />
            </div>

            <div className="logo-container">
              <img src={vivaDecoraLogo} alt="Toggle" />
            </div>
          </div>

          <div className="sections-web">
            <Link to="/">FILMES NÃO CURADOS</Link>
            <Link to="/desliked-movies">FILMES CURTIDOS</Link>
            <Link to="/liked-movies">FILMES NÃO CURTIDOS</Link>
          </div>

          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/desliked-movies" exact component={DeslikedMovies} />
            <Route path="/liked-movies" exact component={LikedMovies} />

            <Route path="/*" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
