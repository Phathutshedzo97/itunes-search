

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5009/api/search/${searchTerm}/${mediaType}`);
      setSearchResults(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching data from the server');
    }
  };

  const handleAddToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">iTunes Search App</h1>
      <div className="row mb-3">
        <div className="col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-lg-3">
          <select className="form-control" value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
            <option value="all">All</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            {/* Add other media types here */}
          </select>
        </div>
        <div className="col-md-2 col-lg-2">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div>
        {searchResults.map((item) => (
          <div key={item.trackId} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{item.trackName}</h3>
              {/* Display other relevant information about the item */}
              <button className="btn btn-sm btn-primary" onClick={() => handleAddToFavorites(item)}>
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2>Favorites</h2>
        {favorites.map((item) => (
          <div key={item.trackId} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{item.trackName}</h3>
              {/* Display other relevant information about the favorite item */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
