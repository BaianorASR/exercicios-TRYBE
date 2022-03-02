import React from 'react';
import '../style/pokemon.css'
import { MyProps } from './pokedex';


class Pokemons extends React.Component<MyProps> {

  render() {
    return (
      <section className='card'>
          <div >
            <p>Name: {this.props.pokemonsList.name}</p>
            <p>Type: {this.props.pokemonsList.type}</p>
            <p>Average: {this.props.pokemonsList.averageWeight.value}{this.props.pokemonsList.averageWeight.measurementUnit}</p>
          </div>
          <div>
            <img src={this.props.pokemonsList.image} />
          </div>
     </section>
    )
  }
}

export default Pokemons