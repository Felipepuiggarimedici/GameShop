import React from "react";
import "./../../styles/itemCards/itemCard.scss";
import {Link} from "react-router-dom";

const Item = (props) => {
    //Card taken from https://codepen.io/sam_garcia2/pen/PozpPRy
    return <>
        <Link className="card" to={`/item/${props.id}`}>

          <div className="imgBox">
            <img src={props.image} alt={props.name} className="imageInCard"/>
          </div>

          <div className="contentBox">
            <h3 className="titleInListing">{props.name}</h3>
            <h2 className="price">{props.price}$</h2>
            <p className="buy">Buy Now</p>
          </div>

        </Link>
    </>
}

export default Item;