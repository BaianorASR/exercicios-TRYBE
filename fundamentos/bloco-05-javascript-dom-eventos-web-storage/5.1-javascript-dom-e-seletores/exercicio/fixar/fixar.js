const emergency = document.querySelectorAll('section');
const noEmergency = document.querySelectorAll('.no-emergency-tasks');
const titles = document.querySelectorAll('h3');
for (let i of emergency) {
  i.style.backgroundColor = 'pink';
}
for (let i of noEmergency) {
  i.style.backgroundColor = 'yellow';
}
for (let i in titles) {
  if (i < 2) {
    titles[i].style.backgroundColor = 'blue';
  }
  if (i > 1) {
    titles[i].style.backgroundColor = 'black';
  }
}
