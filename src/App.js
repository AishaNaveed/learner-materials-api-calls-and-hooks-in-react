
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import Navigation from './components/Navigation';

function App() {

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState([ ]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    console.log("useEffect hook");
  }, []);

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;
