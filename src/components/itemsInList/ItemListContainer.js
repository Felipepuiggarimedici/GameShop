import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";
import getData from "../../helpers/getData";
import ItemList from "./ItemList";
import "./../../styles/itemCards/cardContainer.scss";
import "./../../styles/itemCards/purchaseInterface.scss";
import ItemCount from "./ItemCount";
import LoadingScreen from "../LoadingScreen";

const ItemListContainer = () => {
    const [loading, setLoading]= useState(true);
    const [gameList, setGameList] = useState();

    const routingInfo = useParams();
    console.log(routingInfo)

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
    useEffect(() => {
        getGames();
    }, []);

    const onAdd = () => {
        console.log("Added to cart")
    }
    return <>
        <div className="itemListContainer">
            {loading ? <LoadingScreen/> : <ItemList gameList = {gameList}/>}
        </div>
        <div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    </>
}

export default ItemListContainer