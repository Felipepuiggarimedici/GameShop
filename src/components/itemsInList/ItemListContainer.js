import React, { useEffect, useState }  from "react";
import getDataByCategory from "../../helpers/getDataByCategory";
import getDataById from "../../helpers/getDataById";
import ItemList from "./ItemList";
import "./../../styles/itemCards/cardContainer.scss";
import "./../../styles/itemCards/purchaseInterface.scss";
import LoadingScreen from "../LoadingScreen";
import {useParams, useLocation} from "react-router-dom";

const ItemListContainer = () => {
    const [loading, setLoading]= useState(true);
    const [gameList, setGameList] = useState();
    const [gameFound, setGameFound] = useState(true);
    const location = useLocation().pathname;
    const routingInfo = useParams();

    const getGames = async() => {
        let response = null;
        try {
            if (location.startsWith("/search/")) {
                response = await getDataById(routingInfo);
            }
            else {
                response = await getDataByCategory(routingInfo);
            }
            if (response === 'No result') {
                setGameFound(false);
            }
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
            {loading ? <LoadingScreen/> : gameFound ? <ItemList gameList = {gameList}/> : <h1>No game found</h1>}
        </div>
    </>
}

export default ItemListContainer