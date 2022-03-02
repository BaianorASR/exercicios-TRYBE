import React, { Component } from 'react'
import Pokemons from './pokemon';
import pokemons from '../data';
import '../style/pokedex.css'

export type MyProps= {
  id: number,
  name: string,
  type: string,
  averageWeight: {
    value: number,
    measurementUnit: string,
},
  image: string,
  moreInfo: string,
}

class Pokedex extends React.Component<MyProps> {  
  render() {
    return(
      <section className='pokedex'>
        {pokemons.map((el: MyProps, index: number) => <Pokemons key={index} pokemonsList={el} />)}
      </section>
    )
  }
}

export default Pokedex
