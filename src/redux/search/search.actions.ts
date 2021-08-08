import SearchActionsTypes from './search.types';
import { createApi } from 'unsplash-js';

export const startCurrentSearch = () => ({
  type: SearchActionsTypes.START_CURRENT_SEARCH,
});

export const fetchCurrentSearch = (search: any) => ({
  type: SearchActionsTypes.FETCH_CURRENT_SEARCH,
  payload: search
});

export const setCurrentSearch = (error: any) => ({
  type: SearchActionsTypes.ERROR_CURRENT_SEARCH,
  payload: error
});

export const serverApi = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
});


export const handleSearch = (value: string) => {
  return async (dispatch: any) => {
    dispatch(startCurrentSearch())
    try {
      await serverApi.search.getPhotos({
        query: value
      })
      .then((res: any) => {
        const { results } = res.response;
        dispatch(fetchCurrentSearch(results))
      })
      .catch(error => dispatch(setCurrentSearch(error)));
    } catch (error) {
      dispatch(setCurrentSearch(error))
    }
  };
};
