import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
return (
  <div className='App'>
    <Header/>
    <div  className='Container'>
    <Content/>
    </div>
    <Footer/>
  </div>
)
}

export default App
