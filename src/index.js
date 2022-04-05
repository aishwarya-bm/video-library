import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginProvider } from "./contexts";
import { VideoActionProvider } from "./contexts/wishlistContext/like-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginProvider>
      <VideoActionProvider>
        <App />
      </VideoActionProvider>
    </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
