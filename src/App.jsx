import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Products from './components/Products/Products.jsx'
import Team from './components/Team/Team.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Services from './components/Services/Services.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

  return (
    <>
      <Header/>
      <Products/>
      <Team/>
      <Portfolio/>
      <Services/>
      <Footer/>
    </>
  )
}

export default App