import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addItem = (newItem) => {
        if (!isInCart(newItem.id)) {
            setCart([...cart, {quantity: 1, id:newItem.id, name: newItem.name, price: newItem.price}]);
        }
        else {
            const cartUpdated = cart.map((cartItem) => {
                let updatedItem = cartItem;
                if (cartItem.id === newItem.id) {
                    updatedItem.quantity = cartItem.quantity + 1;
                }
                return updatedItem;
            });
            setCart(cartUpdated);
        }
    }
    const removeItem = (itemId) => {
        let cartUpdated = cart.map((cartItem) => {
            let updatedItem = cartItem;
            if (cartItem.id === itemId) {
                if (cartItem.quantity === 1) {
                    return "";
                } else {
                    updatedItem.quantity = cartItem.quantity - 1;
                }
            }
            return updatedItem;
        });
        cartUpdated = cartUpdated.filter((cartItem) => cartItem !== "");
        setCart(cartUpdated);
    }
    const isInCart = (itemId) => {
        let isInCart = false;
        cart.forEach(item => {
            if (item.id === itemId) {
                isInCart = true;
            }
        });
        return isInCart;
    }
    const clear = () => {
        setCart([]);
    }
    
    const getQuantity = () => {
        let counter = 0;
        cart.forEach((cartItem) => {
            counter += cartItem.quantity;
        });
        return counter;
    }

    return <>
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    </>
}
export default CartContextComponent;