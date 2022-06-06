import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

import Header from "../Views/Pages/Header";
import Body from "./Body";
function App() {
  return (
    <main>
      <Header />
      <Body />
   
    </main>
  );
}

export default App;
