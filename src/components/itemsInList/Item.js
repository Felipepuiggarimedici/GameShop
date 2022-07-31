import React, { useEffect, useState} from "react";
import "./../../styles/itemCards/itemCard.scss";
import {Link} from "react-router-dom";
import isItemInWishlist from "../../helpers/isItemInWishlist";
import updateWishlist from "../../helpers/updateWishlist";

const Item = (props) => {
  
  const [itemInWishlist, setItemInWishlist] = useState(isItemInWishlist(props.id));

  const addToWishlist = async (e) => {
    e.preventDefault();
    setItemInWishlist(!itemInWishlist);
    await updateWishlist(props.id);
  }
  useEffect(() => {
    if (!itemInWishlist) {
      props.removeFromWishlist(props.id);
    }
    // eslint-disable-next-line
  }, [itemInWishlist]);

  //Card taken from https://codepen.io/sam_garcia2/pen/PozpPRy
    return <div className="cardContainer">
        <Link className="card" to={`/item/${props.id}`}>
        
          <div className="imgBox">
            <img src={props.image} alt={props.name} className="imageInCard"/>
          </div>

          <div className="contentBox">
            <h3 className="titleInListing">{props.name}</h3>
            <div className="priceAndWishlist">
              <div className="priceContainer">
                <h2 className="price">${props.price}</h2>
              </div>
              <div className="wrapper">
                  <button onClick={addToWishlist} className={`icon-wishlist ${itemInWishlist ? "in-wishlist":""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>  
                  </button>
              </div>
            </div>
            <p className="buy">Buy Now</p>
          </div>

        </Link>
      </div>
}

export default Item;