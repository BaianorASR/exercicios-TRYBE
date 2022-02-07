import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footere'
// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const arr = [
//   'esdutar',
//   'aprender',
//   'trabalhar'
// ]

function App() {
return (
  <div>
    <Header/>
    <Content/>
    {/* <section>
      <ol>
        {arr.map(task => Task(task))}
      </ol>
    </section> */}
    <Footer/>
  </div>
)
}

export default App
