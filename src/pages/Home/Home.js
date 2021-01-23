import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./Home.css";

import like from "../../assets/curti.png";
import deslike from "../../assets/n-curti.png";

const Home = () => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/4/list/1?api_key=bc34944b565b8fb060d355016adeef9b"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home">
      <div className="main-card">
        <Card size="big" movies={movies ? movies[5] : undefined} />
      </div>

      <div className="buttons">
        <Button
          icon={deslike}
          text="Não Curti!"
          color="#555555"
          width="240px"
        />
        <Button onlyText={true} text="Pular" color="#555555" width="120px" />
        <Button icon={like} text="Curti!" color="#FF5656" width="240px" />
      </div>
    </div>
  );
};

export default Home;
