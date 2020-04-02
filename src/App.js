import React from "react";

import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: null, err: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ err: err.message })
        );
    }

    helper() {
        if (this.state.err && !this.state.lat) {
            return (
                <div>
                    <h1>Error:{this.state.err}</h1>
                </div>
            );
        }

        if (!this.state.err && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner />;
    }

    render() {
        return <div>{this.helper()}</div>;
    }
}

export default App;
