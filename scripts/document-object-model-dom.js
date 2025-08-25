console.log(document.querySelector('button').innerHTML);
/*
document.querySelector('button')
  .innerHTML = 'Changed';
*/

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);

console.log(document.title);
// document.title = 'Changed';

console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
// document.body.innerHTML = '<button>Good job!</button>';

/*
document.body.innerHTML = 'hello';
document.title = 'Good job!';
*/

console.log(String(25));
console.log('25' - 5);
console.log('25' + 5);

console.log(window.document);
window.console.log('window');
console.log(window.alert);

console.log(document.querySelector('.js-9a'));

document.querySelector('.js-9b')
  .innerHTML = '9b done!';

function displayMessage() {
  const inputElement = document.querySelector('.js-name-input');
  document.querySelector('.js-message')
    .innerHTML = `Your name is: ${inputElement.value}`;
}