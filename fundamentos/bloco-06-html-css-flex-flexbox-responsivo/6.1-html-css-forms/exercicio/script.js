function states() {
  const select = document.getElementById('estado');
  const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  for (key of estados) {
    const options = document.createElement('option');
    options.innerText = key;
    options.value = key;
    if (key === 'BA') {
      options.setAttribute('selected','');
    }
    select.appendChild(options);
  }
}

window.onload = () => {
  states()
};


const conteiner = document.createElement('section');
document.querySelector('body').appendChild(conteiner);
