const createDiv = (data) => {
  const div = document.querySelector('#target');
  data.slice(0, 10).forEach(({ name, rank, symbol, priceUsd }) => {
    const p = document.createElement('p');
    p.innerText = `${name} (${symbol}): $${priceUsd}`;
    div.appendChild(p);
  });
};

const bit = () => {
  const END_POINT = `https://api.coincap.io/v2/assets`;
  fetch(END_POINT)
    .then((response) => response.json())
    .then((data) => createDiv(data.data))
    .catch((err) => (document.querySelector('#target').innerHTML = `Problema inesperado: ${err}`));
};
bit();
