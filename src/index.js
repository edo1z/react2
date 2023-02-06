import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const username = (name) => `Bob ${name}`;
const msg = <p>Hello {username("Tanaka")}!</p>;
root.render(msg);
