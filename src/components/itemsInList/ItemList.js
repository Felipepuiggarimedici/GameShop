import React from "react";
import Item from "./Item.js"
import "./../../styles/itemCards/individualCardContainer.scss"

const ItemList = ({gameList}) => {
    return <>
        {gameList.map((game) =>
            <div className="cardContainer">
                <Item 
                key = {game.id}
                id = {game.id}
                name = {game.name} 
                price = {game.price}
                image = {game.image}/>    
            </div>
        )}
    </>
}

export default ItemList;