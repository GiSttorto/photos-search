export const startCurrentSearch = () => ({
  type: 'START_CURRENT_SEARCH',
});

export const fetchCurrentSearch = (search: any) => ({
  type: 'FETCH_CURRENT_SEARCH',
  payload: search
});

export const setCurrentSearch = (error: any) => ({
  type: 'ERROR_CURRENT_SEARCH',
  payload: error
});

