import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({children}) => {
    
    let getCartFromLocal = JSON.parse(window.localStorage.getItem("cart"));
    if (getCartFromLocal === null) {
        getCartFromLocal = [];
    }
    const [cart, setCart] = useState(getCartFromLocal);

    const getCartItem = (id) => {
        return cart.find(game => game.id === id);
    }
    const addItem = (newItem) => {
        if (!isInCart(newItem.id)) {
            setCart([...cart, {quantity: 1, id:newItem.id, name: newItem.name, price: newItem.price, bigImage: newItem.bigImage, image: newItem.image}]);
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
        if (cart !== null) {
            cart.forEach(item => {
                if (item.id === itemId) {
                    isInCart = true;
                }
            });
        }
        return isInCart;
    }
    const clear = () => {
        setCart([]);
    }
    const getQuantity = () => {
        let counter = 0;
        if (cart !== null) {
            cart.forEach((cartItem) => {
                try {
                    counter += cartItem.quantity;
                }
                catch(error){}
            });
        }
        return counter;
    }

    //saves cart in localstorage
    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return <>
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getQuantity, getCartItem}}>
            {children}
        </CartContext.Provider>
    </>
}
export default CartContextComponent;