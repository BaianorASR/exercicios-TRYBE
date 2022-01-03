window.onload = () => {
  const select = document.getElementById('estado')
  const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  for(key of estados) {
    const options = document.createElement('option');
    options.innerText = key;
    options.value = key;
    select.appendChild(options);
  }
};
const date = document.querySelector('#data_inicio')


const btn = document.querySelector('#submit');
btn.addEventListener('click', () => {
  e.preventDefault();
});
