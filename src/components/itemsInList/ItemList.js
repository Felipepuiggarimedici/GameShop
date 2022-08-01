import React, { useEffect, useState } from "react";
import Item from "./Item.js"
import "./../../styles/itemCards/individualCardContainer.scss";
import { useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemList = ({gameList}) => {
    const location = useLocation().pathname;
    const isWishlist = location.startsWith("GameShop//wishlist");
    const [gameListCopy, setGameListCopy] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (gameList.length !== 0) {
            setGameListCopy(gameList);
        }
        // eslint-disable-next-line
    }, [gameList])

    const removeFromWishlist = (id) => {
        if (isWishlist) {
            setGameListCopy(gameListCopy.filter((game) => game.id !== id));
        }
    }
    useEffect(() => {
        try {
            sessionStorage.setItem("firstSearchedItemId", gameListCopy[0].id)
        } catch(error) {
        } finally {
            if (gameListCopy.length === 0 && isWishlist) {
                navigate("/GameShop/wishlist");
            }
        }
        // eslint-disable-next-line
    }, [gameListCopy])
    return <> 
        {gameListCopy.map((game) =>
                <Item 
                key = {game.id}
                id = {game.id}
                name = {game.name} 
                price = {game.price}
                image = {game.image}
                removeFromWishlist={removeFromWishlist}/>    
        )}
    </>
}

export default ItemList;