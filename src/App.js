import React, { useState, useEffect } from "react";
import axios from "axios";

// import Header from "./components/Header/Header";
// import SideMenu from "./components/SideMenu/SideMenu";

// import menuIcon from "./assets/menu-lateral.png";
// import vivaDecoraLogo from "./assets/logo-viva-decora.png";

import "./App.css";
import Card from "./components/Card/Card";

function App() {
  // const [menuState, setMenuState] = useState(false);
  const [movies, setMovies] = useState(undefined);

  // const changeMenuState = () => {
  //   setMenuState(!menuState);
  // };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/4/list/1?api_key=bc34944b565b8fb060d355016adeef9b"
      )
      .then((res) => {
        // console.log(res.data.results[0]);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <Card size="small" movies={movies ? movies[0] : undefined} />
      <div>teste</div>
      <Card size="big" movies={movies ? movies[5] : undefined} />
    </div>
  );
}

export default App;
