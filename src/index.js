import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Form = (props) => {
  const submit = (e) => {
    e.preventDefault();
    console.log("submit!");
  };
  return (
    <form onSubmit={submit}>
      <button>hoge</button>
    </form>
  );
};
root.render(<Form />);
