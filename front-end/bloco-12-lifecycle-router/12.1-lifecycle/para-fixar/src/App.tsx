// App.js
import React, { Component }from 'react';
import './App.css';

interface IAppProps {}

interface IAppState {
  characters: Array<{ name: string; image: string }>;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
        characters: [{name: '', image: ''}],
    };
  }

  componentDidMount(): void {
    this.fetchCharacters()
  }

  fetchCharacters = (): void => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;