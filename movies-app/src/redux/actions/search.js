import * as type from './types';
import * as service from '../../api/services';

export function getSearchAutocompleteMovieData(data, onSuccess, onFailed) {
  return async dispatch => {
    await service
      .getMovieData(data.page, data.keyword)
      .then(response => {
        onSuccess(response);
        dispatch(setMovieData(response.Search));
      })
      .catch(err => {
        resetSearchAutocomplete();
        onFailed(err);
      });
  };
}

export function resetSearchAutocomplete() {
  return dispatch => {
    dispatch(setMovieData([]));
  };
}

export function setMovieData(data) {
  return {
    type: type.SEARCH_AUTOCOMPLETE,
    data,
  };
}
