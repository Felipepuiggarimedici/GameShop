import React from 'react'
import NavBar from "./components/NavBar'"
import ItemListContainer from "./components/ItemListContainer.js"

function App() {
  return (
    <>
    <NavBar />
    <main>
      <ItemListContainer greeting="Bienvenidos a GameShop"/>
    </main>
    </>
  );
}

export default App;
