const createDiv = (data) => {
  const div = document.querySelector('#target');
  data.slice(0, 10).forEach(({ name, rank, symbol, priceUsd }) => {
    const p = document.createElement('p');
    p.innerText = `${name} (${symbol}): $${priceUsd}`;
    div.appendChild(p);
  });
};

const bit = () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const endpoint = '/currencies/usd.min.json';
  fetch(`${baseUrl}${endpoint}`)
    .then((response) => response.json())
    .then((data) => console.log(data.usd))
    .catch((err) => {
      document.querySelector('#target').innerHTML = `Problema inesperado: ${err}`;
    });
};
bit();
