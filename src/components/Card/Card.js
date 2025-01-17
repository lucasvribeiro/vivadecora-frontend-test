import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import MyModal from "../MyModal/MyModal";

import filledHeart from "../../assets/favorite.png";
import emptyHeart from "../../assets/favorite_.png";
import loading from "../../assets/loading.gif";

import "./Card.css";

const Card = (props) => {
  const [movie, setMovie] = useState(undefined);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const changeModalState = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    setMovie(props.movie);
  }, [props.movie]);

  if (!movie)
    return (
      <div>
        <img style={{maxWidth: '80px'}} src={loading} alt="Loading..." />
      </div>
    );
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
        <MyModal
          isOpen={modalIsOpen}
          changeModalState={changeModalState}
          movie={movie}
        />
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
              {movie.original_title.toUpperCase()}
            </div>

            <div
              className={
                props.size === "small"
                  ? "card-info card-info-small"
                  : "card-info card-info-big"
              }
            >
              Ano de Lançamento:{" "}
              {format(new Date(props.movie.release_date), "yyyy")} • Idioma
              Original: {movie.original_language.toUpperCase()}
            </div>
          </div>

          <div
            className={
              props.size === "small"
                ? "container-rating container-rating-small"
                : "container-rating container-rating-big"
            }
          >
            <div
              className={
                props.size === "small"
                  ? "card-rating card-rating-small"
                  : "card-rating card-rating-big"
              }
            >
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
          {/* <ShowMoreText
            lines={1}
            more="Ver mais..."
            onClick={changeModalState}
            expanded={false}
            width={0}
          >
            {movie.overview}
          </ShowMoreText> */}
          {movie.overview.substring(0, 80)}...{" "}
          <button className="show-overview-button" onClick={changeModalState}>
            Ver Sinopse
          </button>
        </div>
        <div className="layer"></div>
      </div>
    );
  }
};

export default Card;
