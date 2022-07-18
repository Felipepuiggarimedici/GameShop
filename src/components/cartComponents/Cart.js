import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import CartItem from "./CartItem.js";
import {Link} from "react-router-dom";
import "./../../styles/cart/cartStyles.scss";

const Cart = () => {

    const { cart, removeItem, clear } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    const calculateCartTotal = () => {
        let total = 0;
        cart.forEach(game => {
            total = total + parseInt(game.price);
        });
        return total;
    }
    useEffect(() => {
        setCartTotal(calculateCartTotal());
        // eslint-disable-next-line
    }, [cart]);

    return <>
        <div className="generalCartContainer">
            <div className="cartItemsContainer">
                {cart.map((game) => <CartItem key={game.id} game={game} removeItem={removeItem}></CartItem>)}
                {cartTotal === 0 ? <div className="totalPricing"><p>Nothing in cart</p><div className="backToHomeScreenContainer"><Link to="/" className="backToHomeScreen">Back to home screen</Link></div></div> : <>
                    <div className="totalPricing">
                        <p>
                            Total:
                        </p>
                        <p className="finalPrice">
                            {cartTotal}$
                        </p>
                    </div></>}
            </div>
        </div>
    </>
}

export default Cart;