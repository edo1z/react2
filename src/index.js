import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: "OFF" };
  }
  toggle = () => {
    this.setState((state) => ({
      switch: state.switch === "ON" ? "OFF" : "ON",
    }));
  };
  render() {
    return <button onClick={this.toggle}>{this.state.switch}</button>;
  }
}
root.render(<Toggle />);
