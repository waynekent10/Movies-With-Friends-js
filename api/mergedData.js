import { getSingleReview, deleteSingleReview, getReviews } from './reviewData';

const ViewReviewDetails = (reviewFirebaseKey) => new Promise((resolve, reject) => {
  getSingleReview(reviewFirebaseKey)
    .then((reviewObject) => {
      resolve({ ...reviewObject });
    }).catch((error) => reject(error));
});
const deleteReviewsDetails = (reviewId) => new Promise((resolve, reject) => {
  getReviews(reviewId).then((reviewsArray) => {
    console.warn(reviewsArray);
    const deleteReviewPromises = reviewsArray.map((review) => deleteSingleReview(review.firebaseKey));

    Promise.all(deleteReviewPromises).then(() => {
      deleteSingleReview(reviewId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { ViewReviewDetails, deleteReviewsDetails };
