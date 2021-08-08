import React, { useEffect, useRef } from 'react';
import { HomePageContainer, HomePageBody }  from './homepage.styles';
import ImagesComponent from '../../components/Images';
import { startCurrentSearch, fetchCurrentSearch, serverApi, setCurrentSearch } from '../../redux/search/search.actions';
import { useDispatch } from 'react-redux'

const HomePage = () => {

  const dispatch = useDispatch();

  const fetchingRandomData = useRef(() => {})

  fetchingRandomData.current = () => {
    dispatch(startCurrentSearch())

    try {
      serverApi.photos.getRandom({
        count: 30
      }).then((results: any) => {
        const { response } = results;
        dispatch(fetchCurrentSearch(response));
      });
    } catch (error) {
      dispatch(setCurrentSearch(error))
    }
  }

  useEffect(() => {
    fetchingRandomData.current()
  }, []);

  return (
    <HomePageContainer>
      <HomePageBody>
        <div style={{ width:'95%'}}>
          <ImagesComponent />
        </div>
      </HomePageBody>
    </HomePageContainer>
  );
}


export default HomePage;
