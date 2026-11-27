const formulario = document.querySelector('form'); // Seleciona o formulário de entrada.
const email = document.getElementById('email'); // Identifica o campo de e-mail.
const lembrar = document.getElementById('lembrar'); // Identifica se o visitante quer relembrar o e-mail.
const statusLogin = document.querySelector('.login-status'); // Localiza o retorno exibido no cartão.
const chaveEmail = 'conexao-segura:login-email'; // Nome do registro local, que contém somente o e-mail.

try {
    const salvo = localStorage.getItem(chaveEmail); // Recupera o endereço lembrado neste navegador.
    if (salvo) {
        email.value = salvo; // Preenche o campo sem recuperar senha.
        lembrar.checked = true; // Indica que o e-mail está sendo lembrado.
    }
} catch {
    // O formulário também funciona quando o navegador bloqueia o armazenamento.
}

formulario.addEventListener('submit', () => { // Mantém o fluxo de demonstração para Minha conta.
    try {
        if (lembrar.checked) localStorage.setItem(chaveEmail, email.value.trim()); // Guarda só o e-mail.
        else localStorage.removeItem(chaveEmail); // Retira o e-mail salvo quando a opção é desmarcada.
    } catch {
        // O armazenamento é opcional e não bloqueia a navegação.
    }
});

document.querySelector('.entrar-google').addEventListener('click', () => { // Explica o estado do botão Google.
    statusLogin.textContent = 'O login com Google ainda não está conectado.'; // Informa o status sem enviar o formulário.
    statusLogin.hidden = false; // Mostra o aviso no próprio cartão.
});
