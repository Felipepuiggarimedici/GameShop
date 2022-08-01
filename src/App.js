import React from 'react'
import NavBar from "./components/navBarComponents/NavBar.js"
import ItemListContainer from "./components/itemsInList/ItemListContainer.js";
import Cart from "./components/cartComponents/Cart.js";
import OrderDetails from "./components/cartComponents/OrderDetails";
import "./styles/body.scss";
import Particle from './components/generalComponents/Particle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/itemsInDetail/ItemDetailContainer';
import CartContextComponent from './context/CartContext';
import GeneralMesssage from './components/generalComponents/GeneralMessage.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <main>
        <CartContextComponent>
          <NavBar />
          <Routes>
            <Route exact path="/GameShop" element={<ItemListContainer/>}/>
            <Route exact path="/GameShop/search/:arrayOfIds" element={<ItemListContainer/>}/>
            <Route exact path="/GameShop/category/:categoryId" element={<ItemListContainer/>}/>
            <Route exact path="/GameShop/wishlist" element={<ItemListContainer/>}/>
            <Route exact path="/GameShop/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route exact path="/GameShop/cart" element={<Cart/>}/>
            <Route exact path="/GameShop/searchOrder/:orderId" element={<OrderDetails/>}/>
            <Route path="/GameShop/*" element={<><GeneralMesssage message={"404 Error; Page not found"}/><Footer absolutePosition="true"/></>}/>
          </Routes>
        </CartContextComponent>
      </main>
      <Particle/>
    </BrowserRouter>
  );
}

export default App;
