import React from "react";
import PulseApp from "../assets/pulse-specific.png";
import "../styles/personalizedInsight.css"
const personalizedInsight = () => {
    return (
        <div className="mainInsightContainer">
            <div style={{backgroundColor:"#546885", opacity:0.2, width: "40%", height:"100%"}}>
               
            </div>
            <img src={PulseApp} className={"image"}></img>
            <div className="textContainer">
                <p className="textValue">Personalised insights<br/>from Pulse</p>
                <p className="textDesc">Be empowered to better manage your health, wealth, work and community with our AI-powered mobile app.</p>
                <p className="download">Download Now <strong>{"->"}</strong></p>
            </div>
        </div>
    )
}

export default personalizedInsight;