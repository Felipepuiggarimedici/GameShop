import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getItemInfoById from "../../helpers/getItemInfoById.js";
import LoadingScreen from "../generalComponents/LoadingScreen.js";
import ItemDetail from "./ItemDetail.js";
import GeneralMessage from "../generalComponents/GeneralMessage.js";
import "./../../styles/itemDetails/itemDetailContainer.scss";
import Footer from "../Footer.js";

const ItemDetailContainer = () => {

    const [loading, setLoading]= useState(true);
    const [game, setGame] = useState();
    const [noGameFound, setNoGameFound] = useState(false);
    const itemToBeObtained = useParams().itemId;

    const getItem = async () => {

        try {
            const response = await getItemInfoById(itemToBeObtained);
            if (response === "No game found") {
                setNoGameFound(true);
            } else {
                setGame(response);
            }
        }
        catch(error) {
            console.log(error)
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
        {loading ? <LoadingScreen/> : noGameFound ? <GeneralMessage message="No Game Found" />  :
            <div className="itemDetailContainer">
                <ItemDetail name = {game.name} price = {game.price} smallImage={game.image} image={game.bigImage} details={game.description} id={game.id}/>
            </div>}
        <Footer absolutePosition={loading || noGameFound}/>
    </>
}

export default ItemDetailContainer;