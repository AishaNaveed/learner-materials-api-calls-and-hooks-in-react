import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import Navigation from './components/Navigation';

function App() {

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState([ ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favCharacter, setFavCharacter] = useState([]);

  const getCharacters = async (pageNumber) => {
    // Utilised Axios for API calls
    const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    setCharacters(apiResponse.data.data);
  };
  
  useEffect(()=>{
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters} favCharacter={favCharacter} updateFavorites={setFavCharacter}/>
    </div>
  );
}

export default App;
