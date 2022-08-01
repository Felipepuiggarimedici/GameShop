import React, { useEffect, useState }  from "react";
import getDataByCategory from "../../helpers/getDataByCategory";
import getDataByIds from "../../helpers/getDataByIds";
import ItemList from "./ItemList";
import "./../../styles/itemCards/cardContainer.scss";
import "./../../styles/itemCards/purchaseInterface.scss";
import LoadingScreen from "../generalComponents/LoadingScreen.js";
import {useParams, useLocation} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GeneralMesssage from "../generalComponents/GeneralMessage";
import Footer from "../Footer";

const ItemListContainer = () => {
    const [gameList, setGameList] = useState([]);
    const [gameFound, setGameFound] = useState(true);
    const [moreGamesAvailable, setMoreGamesAvailable] = useState(true);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([])
    const location = useLocation().pathname;
    const routingInfo = useParams();

    const getGames = async(firstSearch) => {
        if (firstSearch) {
            sessionStorage.clear()
        }
        try {
            if (location.startsWith("/search/")) {
                setResponse(await getDataByIds(routingInfo, firstSearch));
            } else if (location.startsWith("/wishlist")) {
                const wishlist = JSON.parse(localStorage.getItem("wishlist"));
                const idArray = wishlist.map((game) => game.id).filter(gameId => gameId !== undefined);
                try {
                    setResponse(await getDataByIds(idArray, firstSearch));
                } catch(error) {
                    setGameFound(false);
                }
            }
            else {
                setResponse(await getDataByCategory(routingInfo, firstSearch));
            }
        }catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setGameFound(true);
        setLoading(true);
        setGameList([]);
        setMoreGamesAvailable(true);
        getGames(true);

        // eslint-disable-next-line
    }, [routingInfo]);

    useEffect(() => {
        if (response === 'No result') {
            setGameFound(false);
        }
        else if (response === "No more games") {
            setMoreGamesAvailable(false);
        }
        else {
            setGameList([...new Set([...gameList, ...response])]);
            setLoading(false);
        }
         // eslint-disable-next-line
    }, [response]);
    return <>
    {gameFound ?
    <InfiniteScroll dataLength={gameList.length} next={() => getGames(false)} hasMore={moreGamesAvailable} loader={<><LoadingScreen/>\</>} endMessage={loading ? <LoadingScreen/> :<><GeneralMesssage message="Thanks for visiting!"/><Footer absolutePosition={false}/></>}>
        <div className="itemListContainer">
            <ItemList gameList = {gameList}/>
        </div>
    </InfiniteScroll>
    : <> <GeneralMesssage message="No Game Found Under that Category"/><Footer absolutePosition={true}/></>}
    </>
    
}

export default ItemListContainer