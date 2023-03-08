import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

function MovieCard({ movieObj, onUpdate }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieObj.poster_path} />
      <Card.Body>
        <Card.Title>{movieObj.original_title}</Card.Title>
        <Card.Text>{movieObj.overview}</Card.Text>
        <Button onClick={() => onUpdate(movieObj.movie_id)}>Update</Button>
      </Card.Body>
    </Card>
  );
}
MovieCard.propTypes = {
  movieObj: PropTypes.shape({
    original_title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    movie_id: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default MovieCard;
