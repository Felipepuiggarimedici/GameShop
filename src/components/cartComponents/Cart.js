import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../../context/CartContext.js";
import CartItem from "./CartItem.js";
import {Link} from "react-router-dom";
import "./../../styles/cart/cartStyles.scss";
import "./../../styles/cart/paymentStyles.scss";
import PurchaseForm from "./PurchaseForm.js";
import Footer from "../Footer.js";

const Cart = () => {

    const { cart, removeItem, clear } = useContext(CartContext);
    const [cartCopy, setCartCopy] = useState(cart);
    const [cartTotal, setCartTotal] = useState(0);
    const [endPurchase, setEndPurchase] = useState(false);
    //reference for scrolling when finishing purchase
    const refForFinishingPurchase = useRef(null);

    const handleScroll = () =>{ setTimeout(() => {
        refForFinishingPurchase.current?.scrollIntoView({behavior: 'smooth'});
    }, 50)};

    const calculateCartTotal = () => {
        let total = 0;
        cart.forEach(game => {
            total = total + game.quantity * parseInt(game.price);
        });
        if (total === 0) setEndPurchase(false);
        return total;
    }
    useEffect(() => {
        if (endPurchase === false) {
            setCartTotal(calculateCartTotal());
            setCartCopy(cart);
        }
        // eslint-disable-next-line
    }, [cart, endPurchase]);

    return <>
    <div className="containerToCentre">
        <div className="generalCartContainer">
            <div className="cartItemsContainer">

                {cartCopy.map((game) => <CartItem key={game.id} endPurchase={endPurchase} game={game} removeItem={removeItem} noEndPurchase={false}></CartItem>)}
                {cartTotal === 0 ? <div className="totalPricing nothingInCart"><p>Nothing in cart</p><div className="backToHomeScreenContainer"><Link to="/" className="backToHomeScreen">Back to home screen</Link></div></div> : <>
                    <div className="totalPricing">
                        <p>
                            Total:
                        </p>
                        <p className="finalPrice">
                            ${cartTotal}
                        </p>
                        <div className="proceedToPaymentContainer">
                            {endPurchase ? <></> : <button onClick={() => { setEndPurchase(true); handleScroll() }} className="proceedToPayment">Proceed to Payment</button>}
                        </div>
                        <div className="smallGoldButtonContainer">
                            <Link className="smallGoldButton" to="/">Back to home screen</Link>
                            {endPurchase ?<div></div> : <button className="smallGoldButton" onClick={() => clear()} >Clear cart</button>}
                        </div>
                    </div></>}
            </div>
        </div>
        {endPurchase ? <PurchaseForm cart={cart} total={cartTotal} ref={refForFinishingPurchase} clear={clear}/>:<></>}
    </div>
    <Footer absolutePosition={cartTotal === 0}/>
    </>
}

export default Cart;