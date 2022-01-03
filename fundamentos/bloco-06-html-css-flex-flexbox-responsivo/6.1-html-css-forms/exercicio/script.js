const inputs = {};

function salvaInputs() {
  const todosInputs = document.querySelectorAll('input[type=text]');
  for (key of todosInputs) {
    const newObj = {};
    newObj.required = key.required;
    newObj.maxLength = key.maxLength;
    newObj.value = key.value;
    newObj.type = key.type;
    newObj.name = key.name;

    const nome = key.name;
    inputs[nome] = newObj;
  }
}

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
      options.setAttribute('selected', '');
    }
    select.appendChild(options);
  }
}

// https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy
// esse regex ja faz todas as validaçoes de datas em diversos formatos
function validaData() {
  const regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;

  if (!regex.test(inputs.data.value)) {
    console.log('Data invalida');
    return false;
  }
  return true;
}

function checkLength(key) {
  if (key.value.length === 0) {
    console.log(`Por Favor preencha o campo ${key.name}`);
    return false;
  } else if (key.value.length > key.maxLength) {
    console.log(`o tamanho de ${key.name} esta muito grande`);
    return false;
  } else {
    return true;
  }
}

function checkRequired() {
  let lengthOK = false;
  for (key in inputs) {
      lengthOK = checkLength(inputs[key]);
  }
  return lengthOK;
}

function validaDados(event) {
  event.preventDefault();
  salvaInputs();
  checkRequired();
  validaData();

  if (validaData === true && checkRequired === true) {
    console.log('Baianor joestar');
  }
}

window.onload = () => {
  states();
  const btn_enviar = document.querySelector('#submit');
  btn_enviar.addEventListener('click', validaDados);

  const limpar = document.querySelector('#limpar');
};
