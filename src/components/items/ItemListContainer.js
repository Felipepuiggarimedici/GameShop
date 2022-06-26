import React, { useEffect, useState }  from "react";
import getData from "../../helpers/getData";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import "./../../styles/itemCards/cardContainer.scss";
import "./../../styles/itemCards/purchaseInterface.scss";

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
    return <>
        <div className="itemListContainer">
            {loading ? <h1>Loading...</h1> : <ItemList gameList = {gameList}/>}
        </div>
        <ItemCount/>
    </>
}

export default ItemListContainer