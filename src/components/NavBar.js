import React from "react";
import "./../styles/navBar.scss";
import CartWidget from "./navBarComponents/CartWidget";
import Logo from "./navBarComponents/Logo";
import SearchBar from "./navBarComponents/SearchBar";    
import Menu from "./navBarComponents/Menu";
import {Link} from "react-router-dom";

const NavBar = () => {
    return <>
        <header className="App-header, topnav">
            <div className="blankSpace"></div>
            <Link to="/"><Logo/></Link>
            <div className="blankSpace"></div>
            <Menu/>
            <SearchBar />
            <CartWidget />
        </header>
    </>
}

export default NavBar;