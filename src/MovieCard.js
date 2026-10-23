import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
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
function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>Rating: {movie.rating}/10</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

+

export default MovieCard;