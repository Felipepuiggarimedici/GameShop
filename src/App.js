import React from 'react'
import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/itemsInList/ItemListContainer.js";
import Cart from "./components/Cart.js"
import "./styles/body.scss";
import Particle from './components/Particle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/itemsInDetail/ItemDetailContainer';
import CartContextComponent from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <main>
        <CartContextComponent>
          <NavBar />
          <Routes>
            <Route exact path="" element={<ItemListContainer/>}/>
            <Route exact path="/search/:arrayOfIds" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoryName" element={<ItemListContainer/>}/>
            <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
          </Routes>
        </CartContextComponent>
      </main>
      <Particle/>
    </BrowserRouter>
    </>
  );
}

export default App;
