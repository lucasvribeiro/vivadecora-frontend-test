import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import axios from "axios";

import Home from "./pages/Home/Home";
import MoviesList from "./pages/MoviesList/MoviesList";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const location = useLocation();
  const [mobileNavbarState, setMobileNavbarState] = useState(false);
  const [moviesList, setMoviesList] = useState(undefined);
  const [likedMovies, setLikedMovies] = useState([]);
  const [deslikedMovies, setDeslikedMovies] = useState([]);
  const [skippedMovies, setSkippedMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/4/list/1?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
      )
      .then((res) => {
        setMoviesList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMobileNavbarState = () => {
    setMobileNavbarState(!mobileNavbarState);
  };

  const likeMovie = () => {
    setLikedMovies(likedMovies.concat(moviesList[0]));
    moviesList.shift();
  };

  const deslikeMovie = () => {
    setDeslikedMovies(deslikedMovies.concat(moviesList[0]));
    moviesList.shift();
  };

  const skipMovie = () => {
    setSkippedMovies(skippedMovies.concat(moviesList[0]));
    moviesList.shift();
  };

  return (
    <div
      className="app"
      style={
        moviesList &&
        (location.pathname === "/" || location.pathname === "/home")
          ? {
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${moviesList[0].backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }
          : null
      }
    >
      <div className="layer-background"></div>

      <Navbar
        type="mobile"
        state={mobileNavbarState}
        handleCloseNavbar={handleMobileNavbarState}
      />

      <div className="body-content">
        <Header onHamburguerMenuClicked={handleMobileNavbarState} />
        <Navbar type="web" />

        <Switch>
          <Route
            path="/desliked-movies"
            render={(props) => (
              <MoviesList
                {...props}
                moviesList={deslikedMovies}
                title="FILMES NÃO CURTIDOS"
              />
            )}
          />

          <Route
            path="/liked-movies"
            render={(props) => (
              <MoviesList
                {...props}
                moviesList={likedMovies}
                title="FILMES CURTIDOS"
              />
            )}
          />

          <Route
            path="/*"
            render={(props) => (
              <Home
                {...props}
                movie={moviesList ? moviesList[0] : undefined}
                sendLikeMovie={likeMovie}
                sendDeslikeMovie={deslikeMovie}
                sendSkipMovie={skipMovie}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
