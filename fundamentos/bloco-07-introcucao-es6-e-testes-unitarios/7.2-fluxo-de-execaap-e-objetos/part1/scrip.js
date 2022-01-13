const checkValidNumber = (number1, number2) => {
  if (!number1 || !number2) {
    throw new Error('Preencha todos os campos');
  }
  if (isNaN(number1) || isNaN(number2)) {
    throw new Error('Preencha somente com números')
  }
};

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    checkValidNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Resultado: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
