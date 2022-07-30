import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import getCategories from '../../helpers/getCategories';
import LoadingScreen from "../generalComponents/LoadingScreen.js";

const Menu = () => {
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [categories, setCategories] = useState([]);
    const loadCategories = async() => {
        const response = await getCategories();
        setCategories(response);
        setLoadingCategories(false);
    };

    useEffect(() => {
        loadCategories()
    }, []); 

    return <>
    <div className='MenuContainer'>
        <div className="dropdown">
            <button className="dropbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-joystick" viewBox="0 0 16 16">
                    <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
                    <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
                </svg>
            </button>
            <ul className="dropdown-content">
                <Link key="wishlist" className='wishlistSelector' to="/wishlist">Wishlist</Link>
                { loadingCategories ? <LoadingScreen/> :
                categories.map((category) => 
                    <Link key={category.id} to={`/category/${category.id}`} >{category.name}</Link>
                )}
            </ul>
        </div>
    </div>
    </>
}

export default Menu;