/* eslint-disable no-undef */
/* eslint-disable camelcase */
const getMovies = () => new Promise((resolve, reject) => {
  fetch('https://api.themoviedb.org/3/movie/550?api_key=85b2bedde5846d47c072989d7349b549', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getMovies;
