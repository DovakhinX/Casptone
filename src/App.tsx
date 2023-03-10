import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <div className='contain'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
