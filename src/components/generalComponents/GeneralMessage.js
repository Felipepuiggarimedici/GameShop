import React from "react";
import "./../../styles/reUsedStyles/generalMessageStyles.scss";

const GeneralMesssage = ({message}) => {
    return <>
        <div className="generalMessageContainer">
            <div>
                <h1>
                    {message}
                </h1>
            </div>
        </div>
    </>
}
export default GeneralMesssage;