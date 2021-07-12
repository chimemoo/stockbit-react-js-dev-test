import * as type from './types';
import * as service from '../../api/services';

export function getMovieData(data, onSuccess, onFailed) {
  return async (dispatch, getState) => {
    await service
      .getMovieData(data.page, data.keyword)
      .then(response => {
        onSuccess(response);
        if (data.page === 1) {
          dispatch(setMovieData(response.Search));
          dispatch(setMovieCount(parseInt(response.totalResults)));
        } else {
          const currentMovieData = getState();
          dispatch(setMovieData([...currentMovieData.movieReducers.movieData, ...response.Search]));
          dispatch(setMovieCount(parseInt(response.totalResults)));
        }
      })
      .catch(err => {
        console.log(err);
        onFailed(err);
      });
  };
}

export function getSearchMovieData(data, onSuccess, onFailed) {
  return async (dispatch, getState) => {
    await service
      .getMovieData(data.page, data.keyword)
      .then(response => {
        onSuccess(response);
        if (data.page === 1) {
          dispatch(setSearchMovieData(response.Search));
          dispatch(setMovieCount(parseInt(response.totalResults)));
        } else {
          const currentMovieData = getState();
          dispatch(setSearchMovieData([...currentMovieData.movieReducers.searchMovieData, ...response.Search]));
          dispatch(setMovieCount(parseInt(response.totalResults)));
        }
      })
      .catch(err => {
        console.log(err);
        onFailed(err);
      });
  };
}

export function getMovieDetail(data, onSuccess, onFailed) {
  return async dispatch => {
    await service
      .getMovieDetail(data.imdbId)
      .then(response => {
        onSuccess(response);
        dispatch(setMovieDetail(response));
      })
      .catch(err => {
        console.log(err);
        onFailed(err);
      });
  };
}

export function resetMovieDetail() {
  return dispatch => {
    dispatch(setMovieDetail(null));
  };
}

export function resetSearchResult() {
  return dispatch => {
    dispatch(setSearchMovieData([]));
  };
}

export function setSearchMovieData(data) {
  return {
    type: type.SEARCH_MOVIES_DATA,
    data,
  };
}

export function setMovieData(data) {
  return {
    type: type.MOVIES_DATA,
    data,
  };
}

export function setMovieCount(data) {
  return {
    type: type.MOVIES_COUNT,
    data,
  };
}

export function setMovieDetail(data) {
  return {
    type: type.MOVIE_DETAIL,
    data,
  };
}
