import SearchActionsTypes from './search.types';

export interface SearchStateType {
  startSearch: boolean,
  search: Object[] | null,
  error: string | null
}

const initialState = {
  startSearch: false,
  search: [],
  error: null
}

export const searchReducer = (state = initialState, action: any): SearchStateType => {
  switch(action.type) {
    case SearchActionsTypes.START_CURRENT_SEARCH:
      return {
        ...state,
        startSearch: true
      }
    case SearchActionsTypes.FETCH_CURRENT_SEARCH:
      return {
        ...state,
        startSearch: false,
        search: action.payload,
        error: null
      }
    case SearchActionsTypes.ERROR_CURRENT_SEARCH:
      return {
        ...state,
        startSearch: false,
        search: null,
        error: action.error
      }
    default:
      return state;
  }
};
