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
  toggle = (str, e) => {
    this.setState((state) => ({
      switch: state.switch === "ON" ? "OFF" : "ON",
    }));
    console.log(str, e);
  };
  render() {
    return (
      <button onClick={(e) => this.toggle("hoge", e)}>
        {this.state.switch}
      </button>
    );
  }
}
root.render(<Toggle />);
