import { useState } from 'react'
import './sass/App.scss'
import { Header } from './components/header'
import logo from './images/LogoTestmate.svg';
 console.log(typeof logo);

//prettier (formatador auto)

function App() {
  return (
    <Header logo={logo}/>
  )
}

export default App
