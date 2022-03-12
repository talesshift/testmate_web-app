//project made with vite: react-typescript-sass
// for vite docs go-to: https://vitejs.dev/guide/
//-------------------------------------------------
// to run the project...
//
//    >> npm install
//    >> npm run dev
//-------------------------------------------------

import { render } from "react-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}/>
      <Route path="home" element={<Home />}/>
    </Route>
  </Routes>
</BrowserRouter>, 
rootElement
);


//obs:>> npm install sass --save-dev