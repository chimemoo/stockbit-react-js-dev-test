import { combineReducers } from 'redux';
import * as Movie from './movie';
import * as Search from './search';

const rootReducer = combineReducers({
  movieReducers: combineReducers({
    movieData: Movie.getMovieData,
    searchMovieData: Movie.getSearchMovieData,
    movieCount: Movie.getMovieCount,
    movieDetail: Movie.getMovieDetail,
  }),
  searchReducers: combineReducers({
    autocomplete: Search.getSearchAutoComplete,
  }),
});

export default rootReducer;
