import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { getReviews } from '../api/reviewData';
import ReviewCard from '../components/ReviewCard';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [reviews, setReviews] = useState([]);

  const getAllReviews = () => {
    getReviews(user.uid).then(setReviews);
  };

  useEffect(() => {
    getAllReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/review/new" passHref>
        <Button>Review</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* Render reveiwCard component for each review in the reviews state */}
        {reviews.map((review) => (
          <ReviewCard key={review.firebaseKey} reviewObj={review} onUpdate={getAllReviews} />
        ))}
      </div>
    </div>

  );
}

export default Home;
