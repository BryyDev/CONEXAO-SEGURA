const formulario = document.querySelector("form"); // Captura o formulário do HTML.
const email = document.getElementById("email"); // Captura o campo de e-mail.

formulario.addEventListener("submit", function(evento) { // Detecta quando o formulário é enviado.

    evento.preventDefault(); // Impede que a página recarregue.

    const emailDigitado = email.value.trim(); // Pega o e-mail digitado e remove espaços extras.

    if (emailDigitado === "") { // Verifica se o e-mail está vazio.
        alert("Digite seu e-mail!"); // Exibe uma mensagem de erro.
        return; // Interrompe a função.
    }

    if (!email.checkValidity()) { // Verifica se o formato do e-mail é válido.
        alert("Digite um e-mail válido!"); // Exibe uma mensagem de erro.
        return; // Interrompe a função.
    }

    console.log("E-mail informado:", emailDigitado); // Mostra o e-mail no console F12.

    alert("Solicitação validada! O envio do link será implementado depois."); // Simula a confirmação, sem enviar e-mail.

});