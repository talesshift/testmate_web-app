import { useState } from 'react';
import './sass/App.scss';
import Header from './components/header';
import Intro from './components/intro';
import Trust from './components/trust';
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



function App() {
  const companys = [
    woolworths_logo,
    australianGov_logo,
    medibank_logo,
    westpac_logo,
    mastercard_logo
  ]

  return (
    <div>
      <Header logo={logo}/>
      <div className='flexAll'> 
        <Intro image={good_company}/>
        <Trust companys={companys} />
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
