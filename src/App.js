import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import LikedMovies from "./pages/LikedMovies/LikedMovies";
import DeslikedMovies from "./pages/DeslikedMovies/DeslikedMovies";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [mobileNavbarState, setMobileNavbarState] = useState(false);

  const handleMobileNavbarState = () => {
    setMobileNavbarState(!mobileNavbarState);
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          type="mobile"
          state={mobileNavbarState}
          handleCloseNavbar={handleMobileNavbarState}
        />

        <div className="body-content">
          <Header onHamburguerMenuClicked={handleMobileNavbarState} />
          <Navbar type="web" />

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
