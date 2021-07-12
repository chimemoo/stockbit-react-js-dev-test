import * as types from '../actions/types';

export function getSearchAutoComplete(state = [], action) {
  switch (action.type) {
    case types.SEARCH_AUTOCOMPLETE:
      return action.data;
    default:
      return state;
  }
}
