import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SaveDogs from './components/SaveDogs';

function App() {
  const [dogs, setDogs] = useState({ name: '', url: '' });
  const [load, setLoad] = useState(true);

  const axiosFetch = () => {
    setLoad(true);
    axios('https://dog.ceo/api/breeds/image/random')
      .then(({ data: { message } }) => {
        if (!message.includes('terrier')) setDogs({ ...dogs, url: message });
        setLoad(false);
      });
  };

  useEffect(() => {
    const savedDog = JSON.parse(localStorage.getItem('saved_dog'));
    if (savedDog) setDogs(savedDog); else axiosFetch();
    setLoad(false);
  }, []);

  const handleChange = ({ target: { value } }) => {
    setDogs({ ...dogs, name: value });
  };

  const handleSave = () => {
    localStorage.setItem('saved_dog', JSON.stringify(dogs));
  };

  const doguinho = (
    <>
      <img src={ dogs.url } alt="dog" />
      <p>
        Raça
        {' '}
        {dogs.url.split('/')[4]}
      </p>
      <p>{dogs.name}</p>
    </>
  );

  return (
    <div className="App">
      <div className="dog">
        {load ? <p>LOADING...</p> : doguinho}
        <button type="button" onClick={ axiosFetch }>Proximo</button>
      </div>
      <SaveDogs
        name={ dogs.name }
        handleSave={ handleSave }
        handleChange={ handleChange }
      />
    </div>
  );
}

export default App;
