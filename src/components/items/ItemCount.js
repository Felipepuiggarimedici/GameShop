import React, { useEffect, useState }  from "react";
import "./../../styles/itemCards/purchaseInterface.scss"

const ItemCount = () => {
    const [stock, setStock] = useState(0);
    const stockLimit = 10;

    const subtractProduct = () => {
        if (stock != 0) {
            setStock(stock - 1);
        }
    }
    const addProduct = () => {
        if (stock != stockLimit) {
            setStock(stock + 1);
        }
        else {

        }
    }

    return <>
        <div className="purchaseInterfaceContainer">
            <button onClick={subtractProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
            </button>
            <div className="itemquantity">
                <p>
                    {stock}
                </p>
            </div>
            <button className="addProductbutton" onClick={addProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </div>
    </>
}
export default ItemCount;