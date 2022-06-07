import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App";

import Dubai from "./Views/Pages/Dubai"
import AbuDhabi from "./Views/Pages/Abu_dhabi"
import Sharjah from "./Views/Pages/Sharjah"
import Ajman from "./Views/Pages/Ajman"
import Rak from "./Views/Pages/Rak"
import UmmAlQuwain from "./Views/Pages/UmAlQuwain"
import Fujairah from "./Views/Pages/Fujairah"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Auh" element={<AbuDhabi />}></Route>
      <Route path="/Dxb" element={<Dubai />}></Route>
      <Route path="/Shj" element={<Sharjah />}></Route>
      <Route path="/Ajman" element={<Ajman />}></Route>
      <Route path="/Rak" element={<Rak />}></Route>
      <Route path="/UmmAlQuwain" element={<UmmAlQuwain />}></Route>
      <Route path="/Fujairah" element={<Fujairah />}></Route>
    </Routes>
  </BrowserRouter>
);
