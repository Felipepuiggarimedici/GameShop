import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getItemInfoById from "../../helpers/getItemInfoById.js";
import LoadingScreen from "../LoadingScreen.js";
import ItemDetail from "./ItemDetail.js";
import "./../../styles/itemDetails/itemDetailContainer.scss"

const ItemDetailContainer = () => {

    const [loading, setLoading]= useState(true);
    const [game, setGame] = useState();
    const itemToBeObtained = useParams().itemId;

    const getItem = async () => {

        try {
            const response = await getItemInfoById(itemToBeObtained);
            setGame(response);
        }
        catch(error) {
            console.log("Game not found")
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getItem();
        // eslint-disable-next-line
    }, []);
    return <>
        {loading ? <LoadingScreen/> :
            <div className="itemDetailContainer"><ItemDetail name = {game.name} price = {game.price} image={game.bigImage} details={game.description}/>
            </div>}
    </>
}

export default ItemDetailContainer;