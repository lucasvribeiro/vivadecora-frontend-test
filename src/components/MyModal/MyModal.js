import React from "react";
import Modal from "react-modal";

import filledHeart from "../../assets/favorite.png";
import emptyHeart from "../../assets/favorite_black.png";

import "./MyModal.css";

Modal.setAppElement("#root");

const MyModal = (props) => {
  const handleModalState = () => {
    props.changeModalState();
  };

  const closeModal = () => {
    props.changeModalState();
  };

  return (
    <div className="my-modal-container">
      <Modal
        isOpen={props.isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="modal"
      >
        <button className="close-modal-button" onClick={handleModalState}>
          X
        </button>
        <div className="modal-header"></div>
        <div className="modal-movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt="Movie"
          />
        </div>
        <div className="modal-movie-content">
          <h2 className="modal-title">{props.movie.original_title}</h2>
          <p className="modal-other-info">
            DATA DE LANÇAMENTO: {props.movie.release_date} • IDIOMA ORIGINAL:{" "}
            {props.movie.original_language.toUpperCase()}
          </p>
          <div className="card-rating">
            <img
              src={props.movie.vote_average > 1 ? filledHeart : emptyHeart}
              alt="Rating"
            />
            <img
              src={props.movie.vote_average > 3 ? filledHeart : emptyHeart}
              alt="Rating"
            />
            <img
              src={props.movie.vote_average > 5 ? filledHeart : emptyHeart}
              alt="Rating"
            />
            <img
              src={props.movie.vote_average > 7 ? filledHeart : emptyHeart}
              alt="Rating"
            />
            <img
              src={props.movie.vote_average > 9 ? filledHeart : emptyHeart}
              alt="Rating"
            />
          </div>
          <p>({props.movie.vote_count} avaliações)</p>

          <div className="modal-overview">{props.movie.overview}</div>
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;
