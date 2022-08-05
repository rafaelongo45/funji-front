import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App/App.js";

import "./assets/reset.css";
import "./assets/global.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
