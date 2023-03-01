import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import { deleteSingleReview, getSingleReview } from '../api/reviewData';

function ReviewCard({ reviewObj, onUpdate }) {
  const [reviewDetails, setReviewDetails] = useState([]);

  useEffect(() => {
    getSingleReview(reviewObj.firebaseKey).then(setReviewDetails);
  }, [reviewObj.firebaseKey]);

  const deleteThisReview = () => {
    if (window.confirm('Delete this review?')) {
      deleteSingleReview(reviewObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* Link to the review detail page */}
      <Link href={`/review/${reviewObj.firebaseKey}`} passHref>
        <Card.Header style={{ cursor: 'pointer' }}>{reviewDetails.movie_id}</Card.Header>
      </Link>
      <ListGroup variant="flush">
        {/* Displaying review details */}
        <ListGroup.Item>{reviewObj.user_rating}</ListGroup.Item>
        <ListGroup.Item>{reviewObj.casting_rating}</ListGroup.Item>
        <ListGroup.Item>{reviewObj.review_text}</ListGroup.Item>
        <ListGroup.Item>{reviewObj.isFavorite}</ListGroup.Item>
      </ListGroup>
      {/* Link to the review edit page */}
      <Link href={`/review/edit/${reviewObj.firebaseKey}`} passHref>
        <Button variant="info" className="m-2">EDIT</Button>
      </Link>
      {/* Button to delete the review */}
      <Button variant="danger" onClick={deleteThisReview} className="m-2">
        DELETE
      </Button>
    </Card>
  );
}
ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    movie_id: PropTypes.string,
    user_rating: PropTypes.string,
    casting_rating: PropTypes.string,
    review_text: PropTypes.string,
    isFavorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ReviewCard;
