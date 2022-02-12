import { useState } from 'react'
import './sass/App.scss'
import Header from './components/header'
import Block1 from './components/block1'
import logo from './images/LogoTestmate.svg';
 console.log(typeof logo);

//prettier (formatador auto)

function App() {
  return (
    <div>
      <Header logo={logo}/>
      <div className='flexAll'> 
        <Block1 prop="oi"/>
      </div>
    </div>
  )
}

export default App
