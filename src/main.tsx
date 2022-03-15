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
import Services from "./pages/services";
import Rapid from "./pages/sub_services/Rapid";

import Platform from "./pages/platform";
import Resources from "./pages/resources";
import About from "./pages/about";
import Contact from "./pages/contact";
import Roles from "./pages/roles";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}/>
      <Route path="home" element={<Home />}/>
      <Route path="services" element={<Services />}/>
      <Route path="services/rapid" element={<Rapid />}/>
      <Route path="platform" element={<Platform />}/>
      <Route path="aboutus" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="roles" element={<Roles />}/>
      <Route path="resources" element={<Resources />}/>
    </Route>
  </Routes>
</BrowserRouter>, 
rootElement
);


//obs:>> npm install sass --save-dev