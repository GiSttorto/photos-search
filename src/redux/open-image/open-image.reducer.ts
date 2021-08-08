export interface SearchStateType {
  startSearch: boolean,
  search: any;
  error: string | null
}

const initialState = {
  startSearch: false,
  search: [],
  error: null
}

export const searchReducer = (state = initialState, action: any): SearchStateType => {
  switch(action.type) {
    case 'START_CURRENT_SEARCH':
      return {
        ...state,
        startSearch: true
      }
    case 'FETCH_CURRENT_SEARCH':
      return {
        ...state,
        startSearch: false,
        search: action.payload,
        error: null
      }
    case 'ERROR_CURRENT_SEARCH':
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
