import { useState } from 'react';
import './sass/App.scss';
import Header from './components/header';
import Intro from './components/intro';
import Trust from './components/trust';
import Carousel from './components/carousel';
//import logo
import logo from './images/LogoTestmate.svg';
//import "intro" ilustration 
import good_company from './images/home/good_company.png';
//import "brands that trust us" logo's
import medibank_logo from './images/home/Group 4098.png';
import westpac_logo from './images/home/layer1.png';
import mastercard_logo from './images/home/Mastercard-logo.png';
import woolworths_logo from './images/home/woolworths-logo.png';
import australianGov_logo from './images/home/Group 4110.png';
//import "porcess" illustrations
import our_process from './images/home/Group 3910.png';
import our_process_a from './images/home/Group 3910a.png';
import our_process_b from './images/home/Group 3910d.png';
import our_process_c from './images/home/Group 3910b.png';
import our_process_d from './images/home/Group 3910c.png';
//import "reviews" images
import main_review_img from './images/home/docusign-xo3fdXgTJP8-unsplash.png'
import small_review_img_a from './images/home/daria-pimkina-tYaccl19A3Q-unsplash.png'
import small_review_img_b from './images/home/linkedin-sales-solutions-pAtA-1.png'
import small_review_img_c from './images/home/linkedin-sales-solutions-pAtA8xe iVM-unsplash.png'




function App() {
  //brands in "brands that trust us":
  const companys = [
    woolworths_logo,
    australianGov_logo,
    medibank_logo,
    westpac_logo,
    mastercard_logo
  ]
  //slides in the "our process" carousel:
  const process_slides = [
    {image:our_process, title:"Call our experts for free", text:"Our team in trained to understand your needs and help improve your website's UX"},
    {image:our_process_a, title:"Call our friends for free", text:"you guys like to understand your needs and help improve your website's UX"},
    {image:our_process_b, title:"Call our helpers for free", text:"Help me understand your needs and improve"},
    {image:our_process_c, title:"Call ourselves for free", text:" help improve your website's UX"},
    {image:our_process_d, title:"Call me back for free", text:" trained to understand your needs "}
  ]
  //everything in "reviews":
  const main_review = {
    icon:"",
    title:"",
    image:main_review_img,
    score:4.7,
    name:"",
    text:"",
  }
  const small_reviews = [
    {image:small_review_img_a,
      quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur.",
      name:"Amanda Smith",
      position:"Head of Research at Ford Company"},
    {image:small_review_img_a,
      quote:"In exercitation ipsum dolor consequat et eiusmod duis et in pariatur.",
      name:"Amanda Smith",
      position:"Janitor at The Mall Next Door"},
    {image:small_review_img_a,
      quote:"Dolore voluptate eu amet ullamco cupidatat eiusmod mollit",
      name:"Amanda Smith",
      position:"Head of Design Systems at Rockfeller Inc."}
  ]
    
  
  //--------------------------------
  //RETURN overall home structure
  return (
    <div>
      <Header logo={logo}/>
      <div className='flexAll'> 
        <Intro image={good_company}/>
        <Trust companys={companys}/>
        <Carousel slides={process_slides}/>
        <Intro image={good_company}/>
        <Intro image={good_company}/>
        <Trust companys={companys} />
        <Trust companys={companys} />
        <Intro image={good_company}/>
      </div>
    </div>
  )
}

export default App
