import React, {useEffect} from 'react';
import { AppContainer, AppBodyContainer }  from './app.styles';
import Header from './components/Header';
import ImagesComponent from './components/Images';
import { useDispatch } from 'react-redux'
import { startCurrentSearch, fetchCurrentSearch, serverApi, setCurrentSearch } from './redux/search/search.actions';


const App = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchingData = () => {
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
    fetchingData()
  }, [fetchingData]);

  return (
    <AppContainer>
      <Header />
      <AppBodyContainer>
        <div style={{ width:'95%'}}>
          <ImagesComponent />
        </div>
      </AppBodyContainer>
    </AppContainer>
  );
}


export default App;
