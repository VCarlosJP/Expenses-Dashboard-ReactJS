import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MainNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
