function renderResult() {
  const inputModal = document.querySelector('#inputModal');
  for (key in inputs) {
    const p = document.createElement('p');
    const span = document.createElement('strong');
    p.innerHTML = `<strong>${key}: </strong>${inputs[key].value}`
    inputModal.appendChild(p);
  }
}

function passedValidation() {
  console.log('PASSOU');
  saveInputs();
  renderResult()
  var myModal = new bootstrap.Modal(document.getElementById('myModal'))
  myModal.show()
}

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #DC3545',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#DC3545',
    fontSize: '13px',
    textDecoration: 'underlined',
  },
  
  focusInvalidField: true,
  lockForm: true,
});

function validations(e) {
  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Nome muito curto',
      },
      {
        rule: 'maxLength',
        value: 40,
      },
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        rule: 'email',
        errorMessage: 'O Email ta errado seu comedia',
      },
      {
        rule: 'maxLength',
        value: 50,
      },
    ])
    .addField('#cpf', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        rule: 'number',
        errorMessage: 'Preencha somente com números',
      },
      {
        rule: 'maxLength',
        value: 11,
      },
      {
        rule: 'minLength',
        value: 11,
        errorMessage: 'muito curto',
      },
    ])
    .addField('#endereco', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 200,
      },
    ])
    .addField('#cidade', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 28,
      },
    ])
    .addField('#estado', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 200,
      },
    ])
    .addRequiredGroup('#radio-group', 'Selecione uma das opções')
    .addField('#textarea', [
      {
        validator: (value) => {
          return value !== undefined && value.length > 9;
        },
        errorMessage: 'Sua descrição não pode ser menor que 10 letras',
      },
    ])
    .addField('#cargo', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        rule: 'maxLength',
        value: 40,
      },
    ])
    .addField('#data-inicio', [
      {
        rule: 'required',
        errorMessage: 'Este campo é obrigatório',
      },
      {
        plugin: JustValidatePluginDate(() => ({
          format: 'dd/MM/yyyy',
        })),
        errorMessage: 'Formato da data errada',
      },
    ])
    .onSuccess((ev) => {
      ev.preventDefault();
      passedValidation();
    });
}

const inputs = {};
function saveInputs() {
  const todosInputs = document.querySelectorAll('input, textarea');
  for (key of todosInputs) {
    const newObj = {};
    newObj.value = key.value;
    // newObj.name = key.name;
    inputs[key.name] = newObj;
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
    // if (key === 'BA') {
    //   options.setAttribute('selected', '');
    // }
    select.appendChild(options);
  }
}

function pickday() {
  document.querySelector('#data-inicio').DatePickerX.init({
    format: 'dd/mm/yyyy',
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
  const btn_enviar = document.querySelector('#submit');
  btn_enviar.addEventListener('click', validations);
};
