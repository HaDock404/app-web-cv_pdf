import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'
import ScrollToTop from "./styles/ScrollToTop";

import Home from "./pages/Homepage.jsx";
//import Home from "./pages/Test.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
