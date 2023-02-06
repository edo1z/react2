import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
root.render(<Welcome name="TAKAGI" />);
