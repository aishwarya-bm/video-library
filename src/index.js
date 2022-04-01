import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FilterProvider } from "./contexts/filter-context/filter-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
    <App />
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
