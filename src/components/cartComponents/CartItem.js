import React from "react";

const CartItem = ({game, removeItem , endPurchase}) => {
    return <>
        <div className="itemInCartContainer">
            <div className="componentAOfItemInCart">
                <div className="titleOfItem"><h1>{game.name}</h1></div> 
                <div className="imageInCart">
                    <img alt={game.name} src={game.smallImage}></img>
                </div>
            </div>
            <div className="componentBOfItemInCart">
                <div className="pricingAndButttons">
                    <div className="itemPricing"><p>${game.price}</p></div>
                    {endPurchase ? <div></div> : 
                    <button className="removeInCart" onClick={() => removeItem(game.id)}>
                        Remove
                    </button>}
                </div>
            </div>
        </div>
    </>
}
export default CartItem;