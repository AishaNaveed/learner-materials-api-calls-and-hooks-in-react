import axios from 'axios';
import Header from './Header/Header';
import CharacterContainer from './CharacterContainer';
import Navigation from './Navigation/Navigation';
import React, { useState, useEffect } from 'react';
import { useFavourites } from './FavProvider';

function MainLayout() {

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [favCharacter, setFavCharacter] = useState(false);

  const favourite = useFavourites();

  const getCharacters = async (pageNumber) => {
    const apiResponse = await axios.get(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    setCharacters(apiResponse.data.data);
  };

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        favCharacter={favCharacter}
        setFavCharacter={setFavCharacter} />
      <CharacterContainer characters={favCharacter ? favourite : characters} />
    </div>
  );
}

export default MainLayout;