import React from "react";

import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">Fetching your location!</div>
            </div>
            <p></p>
        </div>
    );
};

export default Spinner;
