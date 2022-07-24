import React from "react";
import "./../../styles/loadingScreen.scss";

const LoadingScreen = () => {
    return <>
        <div className="loaderContainer">
            <div className="spinner">
                <div className="color"></div>
                <div className="mask"></div>
            </div>
        </div>
    </>
}

export default LoadingScreen;