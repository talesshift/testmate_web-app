import { useState } from 'react';
import './sass/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet, Link } from "react-router-dom";


//import logo
import logo from './images/LogoTestmate.svg';
//import "footer" icons
import footer_topLogo from './images/home/Group 4043.png';
import footer_topIcon_b from './images/home/Group 206.png';
import footer_topIcon_c from './images/home/Group 207.png';
import footer_topIcon_a from './images/home/Group 208.png';

//-------------------------------------------------

//"footer" text,structure,links and images
const footer_top = {
  logo:footer_topLogo,
  text:"© 2022 Testmate. All Rights Reserved.",
  socials:[
    {icon:footer_topIcon_a, link:"#"},
    {icon:footer_topIcon_b, link:"#"},
    {icon:footer_topIcon_c, link:"#"},
  ]
}

const map_pages = [
  {title:"Services",link:"#",sub_pages:[
    {name:"Full service user testing",link:"#"},
    {name:"Rapid user testing",link:"#"},
    {name:"Videos/Surveys",link:"#"},
  ]},
  {title:"Roles",link:"#",sub_pages:[
    {name:"UX/UI - Design",link:"#"},
    {name:"Researcher",link:"#"},
    {name:"Marketing",link:"#"},
    {name:"Executive",link:"#"},
    {name:"Product Owner",link:"#"},
    {name:"Ecom",link:"#"},
  ]},
  {title:"Platform",link:"#",sub_pages:[]},
  {title:"Portifolio",link:"#",sub_pages:[]},
  {title:"Resources",link:"#",sub_pages:[
    {name:"Blog",link:"#"},
    {name:"Double your conversations",link:"#"},
    {name:"UX for Government Agencies",link:"#"},
  ]},
  {title:"Industries",link:"#",sub_pages:[
    {name:"Agencies",link:"#"},
    {name:"e-Commerce",link:"#"},
    {name:"Financial Institutions",link:"#"},
    {name:"Health Insurance",link:"#"},
    {name:"Government Agencies",link:"#"},
    {name:"SaaS",link:"#"},
    {name:"Startups",link:"#"},
    {name:"Nonprofits (NPO)",link:"#"},
  ]},
  {title:"Contact",link:"#",sub_pages:[]},
  {title:"About Us",link:"#",sub_pages:[]},
  {title:"Login",link:"#",sub_pages:[]},
]

//-------------------------------------------------

function App() {

  return (
    <div>
      <Header logo={logo}/>
      <Outlet/>
      <Footer footer_top={footer_top} map_pages={map_pages}/>
    </div>
  )
}

export default App;
