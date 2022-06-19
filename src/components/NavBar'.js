import React from "react";
import "./../styles/navBar.scss";
import CartWidget from "./navBarComponents/CartWidget";
import Logo from "./navBarComponents/Logo";
import SearchBar from "./navBarComponents/SearchBar";    
import Menu from "./navBarComponents/Menu";

const NavBar = () => {
    return <>
        <header className="App-header, topnav">
            <div className="blankSpace"></div>
            <Logo/>
            <div className="blankSpace"></div>
            <Menu/>
            <SearchBar />
            <CartWidget />
        </header>
    </>
}

export default NavBar;