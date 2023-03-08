import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleReview } from '../api/reviewData';

function ReviewCard({ reviewObj, onUpdate }) {
  const deleteThisReview = () => {
    if (window.confirm('Delete this review?')) {
      deleteSingleReview(reviewObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={reviewObj.image} alt={reviewObj.user_rating} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{reviewObj.user_rating}</Card.Title>
        <p className="card-text bold">{reviewObj.casting_rating} Casting Rating</p>
        <p className="card-text bold">{reviewObj.review_text} Review </p>
        <Link href={`/review/${reviewObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`review/edit/${reviewObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisReview} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    movie_id: PropTypes.string,
    image: PropTypes.string,
    user_rating: PropTypes.string,
    casting_rating: PropTypes.string,
    review_text: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ReviewCard;
