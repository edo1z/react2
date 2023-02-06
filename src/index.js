import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
const App = (props) => {
  return (
    <div>
      <Welcome name="Taro" />
      <Welcome name="Jiro" />
      <Welcome name="Saburo" />
    </div>
  );
};
root.render(<App />);
