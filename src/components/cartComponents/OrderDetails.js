import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GeneralMesssage from "../generalComponents/GeneralMessage.js";
import searchOrder from "./../../helpers/searchOrder.js";
import Footer from "../Footer.js";
import CartItem from "./CartItem.js";
import "./../../styles/cart/cartStyles.scss";
import LoadingScreen from "../generalComponents/LoadingScreen.js";
import {Link} from "react-router-dom";

const OrderDetails = () => {
    const [orderFound, setOrderFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartHistory, setCartHistory] = useState();
    const [fullName, setFullName] = useState();
    const [cityAndCountry, setCityAndCountry] = useState();
    const routing = useParams();

    const getPurchaseHistory = async () => {
        const purchaseInfo = await searchOrder(routing.orderId);
        if (purchaseInfo !== "No order found") {
            setOrderFound(true);
            setCartHistory(purchaseInfo.copyOfCartWithSelectedEntries);
            let counter = 0;
            purchaseInfo.copyOfCartWithSelectedEntries.forEach((game) => counter += game.price*game.quantity);
            setCartTotal(counter);
            setFullName(`${purchaseInfo.firstName} ${purchaseInfo.lastName}`);
            setCityAndCountry(`${purchaseInfo.city}, ${purchaseInfo.country}`)
        }
        setLoading(false);
    }
    useState(() => {
        getPurchaseHistory();
    }, []);

    return <> {loading ? <LoadingScreen/> : orderFound ? <>
        <div className="containerToCentre">
            <div className="generalCartContainer">
                <div className="cartItemsContainer">

                {cartHistory.map((game) => <CartItem key={game.id} endPurchase={true} game={game} noEndPurchase={true}></CartItem>)}
                    <div className="totalPricing purchaseInformation">
                        <p>
                            Total:
                        </p>
                        <p className="finalPrice">
                            ${cartTotal}
                        </p>
                        <p>
                            Purchase made by:
                        </p>
                        <p className="finalPrice">
                            {fullName}
                        </p>
                        <p>
                            Sent to address in:
                        </p>
                        <p className="finalPrice">
                            {cityAndCountry}
                        </p>
                        <div className="smallGoldButtonContainer">
                            <Link className="smallGoldButton" to="/GameShop">Back to home screen</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer absolutePosition={false}/>
    </> : <>
    <GeneralMesssage message={`The order ${routing.orderId} was not found`}/>
    <Footer absolutePosition={true}/></>}

    </>
}

export default OrderDetails;