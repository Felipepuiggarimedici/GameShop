import React from 'react'
import NavBar from "./components/NavBar'"
import ItemListContainer from "./components/items/ItemListContainer.js";
import "./styles/body.scss";
import Particle from './components/Particle';

function App() {
  return (
    <>
    <main>
      <NavBar />
      <ItemListContainer/>
    </main>
    <Particle/>
    </>
  );
}

export default App;
