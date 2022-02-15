import { useState } from 'react'
import './sass/App.scss'
import Header from './components/header'
import Block1 from './components/block1'
import logo from './images/LogoTestmate.svg';
import good_company from './images/home/good_company.png';

 console.log(typeof logo);

//prettier (formatador auto)

function App() {
  return (
    <div>
      <Header logo={logo}/>
      <div className='flexAll'> 
        <Block1 image={good_company}/>
      </div>
    </div>
  )
}

export default App
