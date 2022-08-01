import React  from "react";
import {Link} from "react-router-dom";
import "./../../styles/itemDetails/detailButtons.scss";

const ItemCount = (props) => { 
    return <>
        {props.isInCart ? <>
            <div className="itemCountButtonsContainer">
                <button className="buy editCartButton" onClick={() => {props.onRemove()}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg></button>
                <p className="quantityInDetail">{props.cartItem.quantity}</p>
                <button className="buy editCartButton" onClick={() => {props.onAdd()}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></button>
            </div>
            <div className="smallButtonsBelowEditCart">
                <div className="smallGoldButtonContainer">
                    <Link className="smallGoldButton" to="/GameShop/Cart">Proceed to Cart</Link>
                </div>
                <div className="smallGoldButtonContainer">
                    <Link className="smallGoldButton" to="/GameShop">Back to home screen</Link>
                </div>
            </div>
        </>
        : <>
            <button className="buy" onClick={() => {props.onAdd()}}>
                Add to Cart
            </button>
            <div className="smallButtonsBelowEditCart">
                <div className="smallerContainer"></div>
                <div className="smallGoldButtonContainer biggerGoldButton">
                    <Link className="smallGoldButton" to="/GameShop">Back to home screen</Link>
                </div>
            </div></>
        }
    </>
}
export default ItemCount;