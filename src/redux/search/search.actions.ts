import SearchActionsTypes from './search.types';
import { createApi } from 'unsplash-js';

export const startCurrentSearch = () => ({
  type: SearchActionsTypes.START_CURRENT_SEARCH,
});

export const setCurrentPage = () => ({
  type: SearchActionsTypes.SET_CURRENT_PAGE,
});

export const setSearchValue = (searchValue: string) => ({
  type: SearchActionsTypes.SET_CURRENT_VALUE,
  value: searchValue
})

export const fetchCurrentSearch = (search: any, totalPages: number) => ({
  type: SearchActionsTypes.FETCH_CURRENT_SEARCH,
  payload: search,
  totalPages: totalPages
});

export const setErrorSearch = (error: any) => ({
  type: SearchActionsTypes.ERROR_CURRENT_SEARCH,
  payload: error
});

export const serverApi = createApi({
  accessKey: `${process.env.REACT_APP_ACCESS_KEY}`,
});


export const handleSearch = (value: string, page: number) => {
  return async (dispatch: any) => {
    dispatch(startCurrentSearch())
    dispatch(setSearchValue(value))

    try {
      await serverApi.search.getPhotos({
        query: value,
        perPage: 30,
        page: page
      })
      .then((res: any) => {
        const { results, total_pages } = res.response;
        dispatch(fetchCurrentSearch(results, total_pages))
      })
      .catch(error => dispatch(setErrorSearch(error)));
    } catch (error) {
      dispatch(setErrorSearch(error))
    }
  };
};
