import React from "react";

const CartItem = ({game, removeItem, endPurchase, noEndPurchase}) => { 
    
    return <>
        <div className={`itemInCartContainer ${noEndPurchase ? "noImageInCartContainer": ""}`}>
            <div className={`componentAOfItemInCart ${noEndPurchase ? "noImageInCart": ""}`}>
                <div className="titleOfItem"><h1>{game.name} </h1></div> 
                { noEndPurchase ? <></> :
                <div className="imageInCart">
                    <img alt={game.name} src={game.image}></img>
                </div>}
            </div>
            <div className="componentBOfItemInCart ">
                <div className="pricingAndButttons">
                    {noEndPurchase ? <div className="emptyDivInCart"></div> : <></>}
                    <div className="quantityInCart">
                        <p>{game.quantity} Unit{game.quantity === 1 ? "":"s"}</p>
                    </div>
                    <div className="itemPricing"><p>${game.price * game.quantity}</p></div>
                    { noEndPurchase ? <></> :
                    endPurchase ? <div></div> : 
                    <button className="removeInCart" onClick={() => removeItem(game.id)}>
                        Remove
                    </button>}
                </div>
            </div>
        </div>
    </>
}
export default CartItem;