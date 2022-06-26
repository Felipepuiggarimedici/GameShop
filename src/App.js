import React from 'react'
import NavBar from "./components/NavBar'"
import ItemListContainer from "./components/items/ItemListContainer.js"

function App() {
  return (
    <>
    <NavBar />
    <main>
      <ItemListContainer/>
    </main>
    </>
  );
}

export default App;
