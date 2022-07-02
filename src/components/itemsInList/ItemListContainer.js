import React, { useEffect, useState }  from "react";
import getData from "../../helpers/getData";
import ItemList from "./ItemList";
import "./../../styles/itemCards/cardContainer.scss";
import "./../../styles/itemCards/purchaseInterface.scss";
import LoadingScreen from "../LoadingScreen";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
    const [loading, setLoading]= useState(true);
    const [gameList, setGameList] = useState();
    const routingInfo = useParams();

    const getGames = async() => {
        try {
            const response = await getData(routingInfo);
            setGameList(response);
        }catch(error) {
            console.log("Data not found")
        }finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        getGames();
        // eslint-disable-next-line
    }, [routingInfo]);

    return <>
        <div className="itemListContainer">
            {loading ? <LoadingScreen/> : <ItemList gameList = {gameList}/>}
        </div>
    </>
}

export default ItemListContainer