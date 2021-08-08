import SearchActionsTypes from './search.types';

export interface SearchStateType {
  startSearch: boolean,
  search: any;
  error: string | null;
  currentPage: number;
  searchValue: string;
  totalPages: number;
}

const initialState = {
  startSearch: false,
  search: [],
  error: null,
  currentPage: 1,
  searchValue: '',
  totalPages: 0
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
        totalPages: action.totalPages,
        error: null
      }
    case SearchActionsTypes.ERROR_CURRENT_SEARCH:
      return {
        ...state,
        startSearch: false,
        search: null,
        error: action.error
      }
    case SearchActionsTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case SearchActionsTypes.SET_CURRENT_VALUE:
      return {
        ...state,
        searchValue: action.value
      }
    default:
      return state;
  }
};
