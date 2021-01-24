import React from "react";
import Card from "../../components/Card/Card";

import empty from "../../assets/video-camera-vazio.png";

import "./MoviesList.css";

const MoviesList = (props) => {

  return (
    <div className="body-movies-list">
      <h2>{props.title}</h2>

      <div className={props.moviesList.length > 0 ? "movies-list" : "movies-list-empty"}>
        {props.moviesList.length > 0 ? (
          props.moviesList.map((movie, index) => {
            return <Card size="small" movie={movie} key={index} />;
          })
        ) : (
          <div className="empty-container">
            <img src={empty} alt="Empty List" />
            <h2>NENHUM FILME</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
