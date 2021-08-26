import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-yzi3pcao.us.auth0.com"
    clientId="fUUnXHNgP1skfhNWc7vlE3FHybgHjRPI"
    redirectUri="https://mia-san.netlify.app/usuario"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
