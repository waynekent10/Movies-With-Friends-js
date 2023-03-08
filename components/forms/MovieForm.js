// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Button, FloatingLabel, Form } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';

// const initialStateMovie = {
// original_title: '',
// overview: '',
// poster_path: '',
// movie_id: '',
// uid: '',

// };

// export default function MovieForm({ movieObj }) {
// const [formInput, setFormInput] = useState(initialStateMovie);
// const router = useRouter();
// const { user } = useAuth();

// useEffect(() => {
// if (movieObj.movie_id) setFormInput(movieObj);
// }, [movieObj, user]);

// const handleChange = (e) => {
// const { name, value } = e.target;
// setFormInput((prevState) => ({
//  ...prevState,
//  [name]: value,
// }));
// };

// const handleSubmit = (e) => {
// e.preventDefault();
// if (movieObj.movie_id) {
// getSingleMovie(formInput).then(() => router.push('/'));
// } else {
// const payload = { ...formInput, uid: user.uid };
//   getSingleMovie(payload).then(({ name }) => {
//   const patchPayload = { firebaseKey: name };
//  getMovies(patchPayload).then(() => {
//   router.push('/');
//    });
//   });
//  }
// };
// return (
// <div>
// <Head><title>{movieObj.movie_id ? `Update ${movieObj.original_title}` : 'Create Movie'}</title></Head>
// <Form onSubmit={handleSubmit} className="text-color-drkblu">
//  <h2 className="mt-5 text-center">{movieObj.movie_id ? `Update ${movieObj.original_title}` : 'Create Movie'}</h2>
//   <div className="mt-5" />
//  <div className="">Title</div>
//   <FloatingLabel
// controlId = 'floatingInput1';
// label = 'original_title';
// className = <Form.Control
//          type="text"
//  placeholder="Original Title"
// name="original_title"
// value={formInput.original_title}
// onChange={handleChange}
// required
//    />
//    <          'mb-3';
//   </FloatingLabel>
//   <div className="">overview</div>
//  <FloatingLabel
//     controlId="floatingInput2"
//   label="overview"
//    className="mb-3"
//   >
//   <Form.Control
//       type="text"
//      placeholder="overview"
//        name="overview"
//         value={formInput.overview}
//        onChange={handleChange}
//         required
//     />
//  </FloatingLabel>
//      <div className="">Poster Path</div>
//   <FloatingLabel
//     controlId="floatingInput3"
//     label="Poster Path"
//     className="mb-3"
//   >
//   <Form.Control
//     type="url"
//      placeholder="Poster Path"
//     name="poster_path"
//       value={formInput.poster_path}
//      onChange={handleChange}
//      required
//    />
//  </FloatingLabel>
// <Button type="submit" variant="outline-dark" className="m-2 text-color-drkblu">{movieObj.movie_id ? 'Update' : 'Create'}</Button>
//  </Form>
// </div>
// );
// }

// MovieForm.propTypes = {
// movieObj: PropTypes.shape({
// original_title: PropTypes.string,
// overview: PropTypes.string,
//  poster_path: PropTypes.string,
//  movie_id: PropTypes.string,
//  uid: PropTypes.string,
// }),
// };

// MovieForm.defaultProps = {
// movieObj: initialStateMovie,
// };
