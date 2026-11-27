
// Select the form
const formulario = document.querySelector('form');

// Select the input fields
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');

// Select the checkbox
const lembrarSenha = document.querySelector('#lembrar-senha');

// Select the buttons
const botaoEntrar = document.querySelector('.entrar');
const botaoGoogle = document.querySelector('.entrar-google');
const botaoCriarConta = document.querySelector('.criar-conta');

// Capture the input values
const nomeDigitado = nome.value;
const emailDigitado = email.value;
const senhaDigitada = senha.value;

// Display the input values in the console
console.log(nomeDigitado);
console.log(emailDigitado);
console.log(senhaDigitada);
