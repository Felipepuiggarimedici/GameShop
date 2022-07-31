import React, { useContext, useState } from "react";
import Description from "./Description";
import "./../../styles/itemDetails/itemDetails.scss";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";
import isItemInWishlist from "../../helpers/isItemInWishlist";
import updateWishlist from "../../helpers/updateWishlist";

const ItemDetail = (game) => {

    const cartInfoAndMethods = useContext(CartContext);
    const [itemInWishlist, setItemInWishlist] = useState(isItemInWishlist(game.id));
    const addToWishlist = async (e) => {
        e.preventDefault();
        setItemInWishlist(!itemInWishlist);
        await updateWishlist(game.id);
    }
    let itemInCart = cartInfoAndMethods.isInCart(game.id);

    const onAdd = () => {
        itemInCart = true;
        cartInfoAndMethods.addItem(game);
    }
    const onRemove = () => {
        cartInfoAndMethods.removeItem(game.id);
        itemInCart = cartInfoAndMethods.isInCart(game.id);
    }

    return <>
        <div className="contianerToCentre">
            <div className="wrapper itemInDetailWrapper">
                <button onClick={addToWishlist} className={`icon-wishlist ${itemInWishlist ? "in-wishlist":""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>  
                </button>
            </div>
            <div className="itemDetailTopContainer">
                <div className="bigImageContainer">
                    <img className="bigImage" src={game.bigImage} alt={game.name}></img>
                </div>

                <div className="cardInDetails">

                    <div className="contentBox">
                        <h3 className="titleInDetail">{game.name}</h3>
                        <h2 className="price">{game.price}$</h2>
                        <ItemCount onAdd={onAdd} onRemove={onRemove} isInCart={itemInCart} cartItem={cartInfoAndMethods.getCartItem(game.id)} />
                    </div>

                </div>
            </div>
        </div>

        <Description key={game.id} descriptionObj={game.details}/>
    </>
}

export default ItemDetail;