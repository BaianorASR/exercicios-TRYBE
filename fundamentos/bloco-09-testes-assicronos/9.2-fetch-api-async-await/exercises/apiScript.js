// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

function test(joke) {
  const target = document.querySelector('#jokeContainer')
  target.innerText = joke
}

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => 
      test(data.joke)
    );
};
window.onload = () => fetchJoke();

