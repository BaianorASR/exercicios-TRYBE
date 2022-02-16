import React from 'react';
import '../style/pokemon.css'

class Pokemons extends React.Component {
  render() {
    return (
      <section className='card'>
          <div >
            <p>{this.props.obj.name}</p>
            <p>{this.props.obj.type}</p>
            <p>average: {this.props.obj.averageWeight.value}{this.props.obj.averageWeight.measurementUnit}</p>
          </div>
          <div>
            <img src={this.props.obj.image} />
          </div>
     </section>
    )
  }
}

export default Pokemons