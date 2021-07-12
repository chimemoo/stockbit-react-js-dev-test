import * as types from '../actions/types';

export function getMovieData(state = [], action) {
  switch (action.type) {
    case types.MOVIES_DATA:
      return action.data;
    default:
      return state;
  }
}

export function getSearchMovieData(state = [], action) {
  switch (action.type) {
    case types.SEARCH_MOVIES_DATA:
      return action.data;
    default:
      return state;
  }
}

export function getMovieCount(state = 0, action) {
  switch (action.type) {
    case types.MOVIES_COUNT:
      return action.data;
    default:
      return state;
  }
}

export function getMovieDetail(state = {}, action) {
  switch (action.type) {
    case types.MOVIE_DETAIL:
      return action.data;
    default:
      return state;
  }
}
