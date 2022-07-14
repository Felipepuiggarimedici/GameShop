import React, { useContext } from "react";
import "./../styles/navBar.scss";
import CartWidget from "./navBarComponents/CartWidget";
import Logo from "./navBarComponents/Logo";
import SearchBar from "./navBarComponents/SearchBar";    
import Menu from "./navBarComponents/Menu";
import {Link} from "react-router-dom";
import { CartContext } from "../context/CartContext";

const NavBar = () => {

    const cartInfoAndMethods = useContext(CartContext);
    const quantityInCart = cartInfoAndMethods.getQuantity();

    return <>
        <header className="App-header, topnav">
            <div className="blankSpace"></div>
            <Link className ="logoContainer" to="/"><Logo/></Link>
            <div className="blankSpace"></div>
            <Menu/>
            {quantityInCart === 0 ? <><div className="blankContainer"></div><SearchBar/></>: <><SearchBar /><CartWidget quantityInCart={quantityInCart}/></>}
        </header>
    </>
}

export default NavBar;