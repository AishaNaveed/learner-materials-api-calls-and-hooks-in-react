import './App.css';
import React from 'react';
import MainLayout from './components/MainLayout';
import { FavProvider } from './components/FavProvider';

function App() {

  return (
    <FavProvider>
      <MainLayout />
    </FavProvider>
  );
}

export default App;