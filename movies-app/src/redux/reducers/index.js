import { combineReducers } from 'redux';
import * as Movie from './movie';

const rootReducer = combineReducers({
  movieReducers: combineReducers({
    movieData: Movie.getMovieData,
    searchMovieData: Movie.getSearchMovieData,
    movieCount: Movie.getMovieCount,
    movieDetail: Movie.getMovieDetail,
  }),
});

export default rootReducer;
