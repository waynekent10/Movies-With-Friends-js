import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { ViewReviewDetails } from '../../../api/mergedData';

export default function ViewReview() {
  const [reviewDetails, setReviewDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    ViewReviewDetails(firebaseKey).then(setReviewDetails);
  }, [firebaseKey]);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Image src={reviewDetails.image} alt={reviewDetails.image} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>{reviewDetails.name} {reviewDetails.role}</h5>
      </div>
    </div>
  );
}
