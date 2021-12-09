const bg = document.querySelector('#bg');
const font = document.querySelector('#font');
const fontSize = document.querySelector('#fontSize');
document.body.style.backgroundColor = localStorage.getItem('bg');
document.body.style.fontFamily = localStorage.getItem('font');
document.body.style.fontSize = localStorage.getItem('fontSize');

bg.addEventListener('change', function () {
  localStorage.setItem('bg', document.querySelector('#bg').value);
  document.body.style.backgroundColor = localStorage.getItem('bg');
});

font.addEventListener('change', function () {
  localStorage.setItem('font', document.querySelector('#font').value);
  document.body.style.fontFamily = localStorage.getItem('font');
});

fontSize.addEventListener('change', function () {
  localStorage.setItem('fontSize', document.querySelector('#fontSize').value);
  document.body.style.fontSize = localStorage.getItem('fontSize');
});
// localStorage.clear()
