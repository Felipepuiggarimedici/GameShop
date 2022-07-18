import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addItem = (newItem) => {
        if (!isInCart(newItem.id)) {
            setCart([...cart, newItem]);
        }
        else {
            console.log("Error: Item already in cart")
        }
    }
    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    }
    const isInCart = (itemId) => {
        let isInCart = false;
        cart.forEach(item => {
            if (parseInt(item.id) === itemId) {
                isInCart = true;
            }
        });
        return isInCart;
    }
    const clear = () => {
        setCart([]);
    }
    const getQuantity = () => {
        return cart.length;
    }

    return <>
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    </>
}
export default CartContextComponent;