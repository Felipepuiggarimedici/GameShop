import React, { useContext, useState } from "react";
import Description from "./Description";
import "./../../styles/itemDetails/itemDetails.scss"
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = (game) => {

    const cartInfoAndMethods = useContext(CartContext);
    const [itemInCart, setItemInCart] = useState(cartInfoAndMethods.isInCart(game.id));

    const onAdd = () => {
        setItemInCart(true);
        cartInfoAndMethods.addItem(game);
    }
    const onRemove = () => {
        cartInfoAndMethods.removeItem(game.id);
        setItemInCart(false);
    }
    
    return <>
        <div className="contianerToCentre">
            <div className="itemDetailTopContainer">
                <div className="bigImageContainer">
                    <img className="bigImage" src={game.image} alt={game.name}></img>
                </div>

                <div className="cardInDetails">

                    <div className="contentBox">
                        <h3 className="titleInDetail">{game.name}</h3>
                        <h2 className="price">{game.price}$</h2>
                        <ItemCount onAdd={onAdd} onRemove={onRemove} inCart={itemInCart} />
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