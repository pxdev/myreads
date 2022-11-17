import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './scss/main.scss'
import 'remixicon/fonts/remixicon.css'

import App from "./components/App";

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
,
  document.getElementById("root")
);
