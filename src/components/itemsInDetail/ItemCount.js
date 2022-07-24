import React  from "react";
import {Link} from "react-router-dom";
import "./../../styles/itemDetails/detailButtons.scss";

const ItemCount = (props) => {    
    return <>
        {props.inCart ? <>
            <p className="buy addedToCart">Added to Cart</p>
            <Link className="buy" to="/cart">Proceed to Cart</Link>
            <button className="buy smallRemoveButton" onClick={() => {props.onRemove()}}>Remove Item</button>
            <div className="smallGoldButtonContainer">
                <Link className="smallGoldButton" to="/">Back to home screen</Link>
            </div></>
        :
        <button className="buy" onClick={() => {props.onAdd()}}>
            Add to Cart
        </button>}</>
}
export default ItemCount;