import React from "react";
import "./seasonDisplay.css";

const seasonComfig = {
    summer: {
        text: "let's go to beach!",
        iconName: "sun"
    },
    winter: {
        text: "it's so cold here!",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonComfig[season];
    return (
        <div className={`seasonDisplay`}>
            <i className={`icon-left massive ${season} ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${season} ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;
