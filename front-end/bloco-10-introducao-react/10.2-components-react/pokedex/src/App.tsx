import React from 'react';
import Pokedex from './components/pokedex'
import './style/App.css'
import Header from './components/header'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex />
      </div>
      )
      
  }
}

export default App