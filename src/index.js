import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
  };

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("My component was just updated -- it rerendered!");
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <Spinner message="Please accept location request..." />;
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
// );

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
