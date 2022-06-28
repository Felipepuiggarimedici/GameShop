import React, { useState }  from "react";
import "./../../styles/itemCards/purchaseInterface.scss"

const ItemCount = (props) => {
    const [itemsToBeAdded, setItemsToBeAdded] = useState(props.initial);

    const addItemsToBeAdded = () => {
        if (itemsToBeAdded < props.stock) {
            setItemsToBeAdded(itemsToBeAdded + 1);
        }
        else {
            console.log("Not enough stock")
        }
    }
    const subtractItemsToBeAdded = () => {
        if (itemsToBeAdded > 1) {
            setItemsToBeAdded(itemsToBeAdded - 1);
        }
        else {
            console.log("Already minimum amount to be added");
        }
    }
    return <>
        <div className="purchaseInterfaceContainer">
            <button onClick={subtractItemsToBeAdded}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
            </button>
            <div className="itemquantity">
                <p>
                    {itemsToBeAdded}
                </p>
            </div>
            <button className="addProductbutton" onClick={addItemsToBeAdded}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
            <button onClick={() => {props.onAdd(itemsToBeAdded)}}>
                Add to Cart
            </button>
        </div>
    </>
}
export default ItemCount;