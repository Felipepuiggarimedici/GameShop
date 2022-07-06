import React, { useState } from "react";
import Description from "./Description";
import "./../../styles/itemDetails/itemDetails.scss"
import ItemCount from "./ItemCount";

const ItemDetail = (game) => {

    const [itemInCart, setItemInCart] = useState(false);
    const onAdd = () => {
        setItemInCart(true);
    }
    const onRemove = () => {
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
            <Description descriptionObj={game.details}/>
        </div>
    </>
}

export default ItemDetail;