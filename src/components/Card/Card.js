import React, { useEffect, useState } from "react";
import ShowMoreText from "react-show-more-text";
import filledHeart from "../../assets/favorite.png";
import emptyHeart from "../../assets/favorite_.png";

import "./Card.css";

const Card = (props) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    console.log("card load");
    console.log(props.movie);
    setMovie(props.movie);
  }, [props.movie]);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  if (!movie) return <div>loading</div>;
  else {
    return (
      <div
        className={props.size === "small" ? "card card-small" : "card card-big"}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className={
            props.size === "small"
              ? "container container-small"
              : "container container-big"
          }
        >
          <div
            className={
              props.size === "small"
                ? "container-info container-info-small"
                : "container-info container-info-big"
            }
          >
            <div
              className={
                props.size === "small"
                  ? "card-title card-title-small"
                  : "card-title card-title-big"
              }
            >
              {movie.original_title}
            </div>

            <div
              className={
                props.size === "small"
                  ? "card-info card-info-small"
                  : "card-info card-info-big"
              }
            >
              DATA DE LANÇAMENTO: {movie.release_date} • IDIOMA ORIGINAL:{" "}
              {movie.original_language.toUpperCase()}
            </div>
          </div>

          <div
            className={
              props.size === "small"
                ? "container-rating container-rating-small"
                : "container-rating container-rating-big"
            }
          >
            <div className="card-rating">
              <img
                src={movie.vote_average > 1 ? filledHeart : emptyHeart}
                alt="Rating"
              />
              <img
                src={movie.vote_average > 3 ? filledHeart : emptyHeart}
                alt="Rating"
              />
              <img
                src={movie.vote_average > 5 ? filledHeart : emptyHeart}
                alt="Rating"
              />
              <img
                src={movie.vote_average > 7 ? filledHeart : emptyHeart}
                alt="Rating"
              />
              <img
                src={movie.vote_average > 9 ? filledHeart : emptyHeart}
                alt="Rating"
              />
            </div>
            <div
              className={
                props.size === "small"
                  ? "card-number-ratings card-number-ratings-small"
                  : "card-number-ratings card-number-ratings-big"
              }
            >
              ({movie.vote_count} avaliações)
            </div>
          </div>
        </div>

        <div
          className={
            props.size === "small"
              ? "card-sinopse card-sinopse-small"
              : "card-sinopse card-sinopse-big"
          }
        >
          <ShowMoreText
            lines={1}
            more="Ver mais..."
            onClick={executeOnClick}
            expanded={false}
            width={0}
          >
            {movie.overview}
          </ShowMoreText>
        </div>
        <div className="layer"></div>
      </div>
    );
  }
};

export default Card;
