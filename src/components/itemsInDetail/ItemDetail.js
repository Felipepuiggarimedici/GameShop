import React, { useContext } from "react";
import Description from "./Description";
import "./../../styles/itemDetails/itemDetails.scss"
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = (game) => {

    const cartInfoAndMethods = useContext(CartContext);
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

        <div className="descriptionContainer">
            <Description key="description" descriptionObj={game.details}/>
        </div>
    </>
}

export default ItemDetail;