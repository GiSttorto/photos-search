import React from 'react';
import { AppContainer }  from './app.styles';
import Header from './components/Header';
import ImagesComponent from './components/Images';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ImagesComponent />
    </AppContainer>
  );
}

export default App;
