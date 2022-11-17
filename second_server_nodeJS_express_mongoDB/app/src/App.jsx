import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

const App = () => {
  console.log('wtf dude');
  return (
    <>
      <h1>Print fking something maybe?</h1>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
