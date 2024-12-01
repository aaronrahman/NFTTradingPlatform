import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xxxxxxxx.us.auth0.com" // Replace with your Auth0 domain
      clientId="your-client-id" // Replace with your Auth0 client ID
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
);
