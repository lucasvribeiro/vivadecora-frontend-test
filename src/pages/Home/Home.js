import React, { useEffect } from "react";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./Home.css";

import like from "../../assets/curti.png";
import deslike from "../../assets/n-curti.png";

const Home = (props) => {
  const handleLikedMovie = () => {
    props.sendLikeMovie();
  };

  const handleDeslikedMovie = () => {
    props.sendDeslikeMovie();
  };

  const handleSkippedMovie = () => {
    props.sendSkipMovie();
  };

  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <div className="home">
      <div className="main-card">
        <Card
          size="big"
          movie={props.movie ? props.movie : undefined}
        />
      </div>

      <div className="buttons">
        <Button
          onButtonClick={handleDeslikedMovie}
          icon={deslike}
          text="NÃO CURTI"
          color="#555555"
          width="240px"
        />
        <Button
          onButtonClick={handleSkippedMovie}
          onlyText={true}
          text="PULAR"
          color="#555555"
          width="120px"
        />
        <Button
          onButtonClick={handleLikedMovie}
          icon={like}
          text="CURTI"
          color="#FF5656"
          width="240px"
        />
      </div>
    </div>
  );
};

export default Home;
