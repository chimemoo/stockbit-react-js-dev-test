import axios from 'axios';

const endpoint = process.env.REACT_APP_ENDPOINT;
const apiKey = process.env.REACT_APP_API_KEY;

export function getMovieData(page, keyword) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}?apiKey=${apiKey}&s=${keyword}&page=${page}&type=movie`)
      .then(res => {
        if (res.status) {
          resolve(res.data);
        }
        reject();
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function getMovieDetail(imdbId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}?apiKey=${apiKey}&i=${imdbId}&plot=full`)
      .then(res => {
        if (res.status) {
          resolve(res.data);
        }
        reject();
      })
      .catch(err => {
        reject(err);
      });
  });
}
