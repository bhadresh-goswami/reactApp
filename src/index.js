import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Nav from "./common/nav";
import Header from "./common/header";
import About from "./pages/about";
import Services from "./pages/services";

ReactDOM.render(<Nav />, document.getElementById("mainNav"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<About />, document.getElementById("about"));
ReactDOM.render(<Services />, document.getElementById("services"));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
