import React, { Component } from 'react'
import Pokemons from './pokemon';
import pokemons from '../data';
import '../style/pokedex.css'

class Pokedex extends React.Component {
  render() {
    return(
      <section className='pokedex'>
        {pokemons.map((el, index) => <Pokemons key={index} obj={el}/>)}
      </section>
    )
  }
}

export default Pokedex
