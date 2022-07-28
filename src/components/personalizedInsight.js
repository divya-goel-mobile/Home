import React from "react";
import PulseApp from "../assets/pulse-specific.png";
import "../styles/personalizedInsight.css"
const personalizedInsight = () => {
    return (
        <div className="mainInsightContainer">
            <div className="innerInsightContainer">
               
            </div>
            <img src={PulseApp} className={"image"}></img>
            <div className="textContainer">
                <p className="textValue">Personalised insights<br/>from Pulse</p>
                <p className="textDesc">Be empowered to better manage your health and community with our AI-powered mobile app.</p>
                <p className="download">Download Now <strong>{"->"}</strong></p>
            </div>
        </div>
    )
}

export default personalizedInsight;