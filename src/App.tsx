import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import SearchPhotosPage from './pages/search-page';
import HomePage from './pages/homepage';


const App = () => {

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/photos/:searchValue' component={SearchPhotosPage} />
        </Switch>
      </div>
    </div>
  );
}


export default App;
