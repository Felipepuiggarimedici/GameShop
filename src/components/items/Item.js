import React from "react";
import "./../../styles/itemCards/itemCard.scss"

const Item = (props) => {

    //Card taken from https://codepen.io/sam_garcia2/pen/PozpPRy
    return <>
        <div className="card">

          <div className="imgBox">
            <img src={props.image} alt={props.name} className="imageInCard"/>
          </div>

          <div className="contentBox">
            <h3>{props.name}</h3>
            <h2 className="price">{props.price}$</h2>
            <a href="#" className="buy">Buy Now</a>
          </div>

        </div>
    </>
}

export default Item;