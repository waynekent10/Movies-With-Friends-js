import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createReview, updateReview } from '../../api/reviewData';

const initialState = {
  user_rating: '',
  casting_rating: '',
  firebaseKey: '',
  review_text: '',
  favorite: '',
  image: '',
};

function ReviewForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateReview(formInput)
        .then(() => router.push(`/review/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createReview(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateReview(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Review Movie</h2>

      <FloatingLabel controlId="floatingInput1" label="Movie Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="user rating" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a rating"
          name="user_rating"
          value={formInput.user_rating}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="casting rating" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a rating"
          name="casting_rating"
          value={formInput.casting_rating}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="review" className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter a rating"
          name="review_text"
          value={formInput.review_text}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite?"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Review movie </Button>
    </Form>
  );
}

ReviewForm.propTypes = {
  obj: PropTypes.shape({
    user_rating: PropTypes.number,
    casting_rating: PropTypes.number,
    firebaseKey: PropTypes.string,
    review_text: PropTypes.string,
    favorite: PropTypes.bool,
    image: PropTypes.string,
  }),
};
ReviewForm.defaultProps = {
  obj: initialState,
};
export default ReviewForm;
