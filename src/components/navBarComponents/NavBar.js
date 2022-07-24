import React, { useContext } from "react";
import "./../../styles/navBarComponentStyles/navBar.scss";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import SearchBar from "./SearchBar";    
import Menu from "./Menu";
import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";

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