import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <article className="movie-card">
      <img src={posterURL} alt={`Affiche de ${title}`} className="movie-poster" />
      <div className="movie-body">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">★ {rating} / 5</p>
        <p className="movie-description">{description}</p>
      </div>
    </article>
  );
};

export default MovieCard;