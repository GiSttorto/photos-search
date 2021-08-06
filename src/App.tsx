import React, { useState } from 'react';
import './App.css';
import { createApi } from 'unsplash-js';

const App = () => {
  const [photosResp, setPhotosResp] = useState([]);
  const [newSearch, setNewSearch] = useState('')


  
  const fetchSearch = () => {
    serverApi.search.getPhotos({query: newSearch})
    .then((result: any) => {
      setPhotosResp(result.response?.results);
    })
    .catch(error => console.log('error:  ', error))
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchSearch();
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type='search'
            value={newSearch}
            onChange={e => setNewSearch(e.target.value)}
          />
          <button type='submit'>search</button>
        </form>
        <div style={{ margin: "20px", display: 'flex', flexWrap: 'wrap'}}>
          {photosResp.map((photos: any, idx: number) => (
            <img key={idx} src={photos.urls.small} alt={photos.alt_description} />
          ))}
        </div>
    </div>
  );
}

export default App;
