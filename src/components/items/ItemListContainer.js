import React, { useEffect, useState }  from "react";
import getData from "../../helpers/getData";
import ItemList from "./ItemList";
import "./../../styles/itemCards/cardContainer.scss";
import "./../../styles/itemCards/purchaseInterface.scss";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const [loading, setLoading]= useState(true);
    const [gameList, setGameList] = useState();

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async() => {
        try {
            const response = await getData;
            setGameList(response);
        }catch(error) {
            console.log("Data not found")
        }finally {
            setLoading(false);
        }
    }
    const onAdd = () => {
        console.log("Added to cart")
    }
    return <>
        <div className="itemListContainer">
            {loading ? <h1 className="loadingTitle">Loading...</h1> : <ItemList gameList = {gameList}/>}
        </div>
        <div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    </>
}

export default ItemListContainer