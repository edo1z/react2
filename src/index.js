import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.countUp(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  countUp() {
    this.setState((state) => ({ count: state.count + 1 }));
  }
  render() {
    return <FormattedCount count={this.state.count} />;
  }
}
function FormattedCount(props) {
  return <h3>[COUNT]: {props.count}</h3>;
}
root.render(<Counter />);
