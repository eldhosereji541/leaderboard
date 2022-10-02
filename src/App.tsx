import React from 'react';
import './App.scss';
import Leaderboard from './components/leaderboard/Leaderboard';
import DataContextProvider from './context/DataContext';

function App() {
  return (
    <DataContextProvider>
      <Leaderboard/>
      </DataContextProvider>
  );
}

export default App;
