const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    fontSize: '14px',
    color: '#dc3545',
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  },
});

function passou() {
  console.log('PASSOU');
}
// console.log(validate)
function validations(e) {
  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Coloca teu email ai camarada',
      },
    ]);

  //  .onSuccess((ev)=>{
  //     ev.preventDefault();
  //     passou();
  // }
  // );
}

const btn_enviar = document.querySelector('#submit');
btn_enviar.addEventListener('click', validations);

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
    options.className = 'dropdown-item';
    if (key === 'BA') {
      options.setAttribute('selected', '');
    }
    select.appendChild(options);
  }
}

function pickday() {
  document.querySelector('#data-inicio').DatePickerX.init({
    format: 'dd/M/yyyy',
    shortMonthLabels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
  });
}
window.onload = () => {
  states();
  pickday();
};
