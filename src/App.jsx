import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer text="¡TechRomán! Una tienda de accesorios tecnológicos." />
    </div>
  );
};

export default App;

