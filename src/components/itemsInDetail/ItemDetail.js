import React from "react";
import Description from "./Description";
import "./../../styles/itemDetails/itemDetails.scss"

const ItemDetail = (game) => {
    return <>
        <div className="contianerToCentre">
            <div className="itemDetailTopContainer">
                <div className="bigImageContainer">
                    <img className="bigImage" src={game.image} alt={game.name}></img>
                </div>

                <div className="cardInDetails">

                    <div className="contentBox">
                        <h3 className="titleInListing">{game.name}</h3>
                        <h2 className="price">{game.price}$</h2>
                        <p className="buy">Add to Cart</p>
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