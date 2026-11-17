

// 1. CAPTURANDO OS ELEMENTOS DO HTML

const formulario = document.querySelector("form"); // Procura a primeira tag <form> do HTML e guarda na variável formulario.

const nome = document.getElementById("name"); // Procura o elemento que possui id="name".
const email = document.getElementById("email"); // Procura o elemento que possui id="email".
const senha = document.getElementById("password"); // Procura o elemento que possui id="password".
const confirmarSenha = document.getElementById("confirm-password"); // Procura o campo de confirmação da senha.


// 2. IDENTIFICANDO O ENVIO DO FORMULÁRIO

formulario.addEventListener("submit", function(evento) { // Quando o formulário for enviado, executa tudo que está dentro desta função.

    evento.preventDefault(); // Impede que o navegador recarregue a página ao enviar o formulário.


    // 3. PEGANDO OS VALORES DIGITADOS

    const nomeDigitado = nome.value.trim(); // Pega o texto digitado no nome e remove espaços do começo e do final.
    const emailDigitado = email.value.trim(); // Pega o e-mail digitado e remove espaços extras.
    const senhaDigitada = senha.value; // Pega a senha digitada. O .value serve para ler o valor do campo.
    const confirmacaoDigitada = confirmarSenha.value; // Pega o valor digitado na confirmação da senha.


    // 4. VERIFICANDO SE EXISTEM CAMPOS VAZIOS

    if ( // Inicia uma condição para verificar se algum campo está vazio.
        nomeDigitado === "" || // Verifica se o nome está vazio. O || significa OU.
        emailDigitado === "" || // Verifica se o e-mail está vazio OU se alguma condição anterior foi verdadeira.
        senhaDigitada === "" || // Verifica se a senha está vazia.
        confirmacaoDigitada === "" // Verifica se a confirmação da senha está vazia.
    ) { // Se pelo menos uma condição for verdadeira, executa o código abaixo.
        alert("Preencha todos os campos!"); // Mostra uma mensagem de erro na tela.
        return; // Encerra a execução desta função, impedindo que o código continue.
    } // Encerra a verificação dos campos vazios.


    // 5. VALIDANDO O NOME

    if (nomeDigitado.length < 3) { // Verifica se o nome possui menos de 3 caracteres. O .length conta os caracteres.
        alert("O nome precisa ter pelo menos 3 caracteres."); // Mostra uma mensagem caso o nome seja muito curto.
        return; // Interrompe a função se o nome não for válido.
    } // Encerra a verificação do nome.


    // 6. VALIDANDO O E-MAIL

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailDigitado); // Verifica se o texto tem um formato básico de e-mail, como nome@site.com, e retorna true ou false.

    if (!emailValido) { // O ! significa NÃO. Esta condição será verdadeira se o e-mail NÃO for válido.
        alert("Digite um e-mail válido."); // Mostra uma mensagem de erro para o e-mail inválido.
        return; // Interrompe a função para impedir que continue com um e-mail inválido.
    } // Encerra a verificação do e-mail.


    // 7. VALIDANDO O TAMANHO DA SENHA

    if (senhaDigitada.length < 8) { // Verifica se a senha possui menos de 8 caracteres.
        alert("A senha precisa ter pelo menos 8 caracteres."); // Informa o tamanho mínimo necessário.
        return; // Interrompe a função quando a senha é muito curta.
    } // Encerra a verificação do tamanho da senha.


    // 8. COMPARANDO AS DUAS SENHAS

    if (senhaDigitada !== confirmacaoDigitada) { // O !== significa DIFERENTE. Verifica se as senhas são diferentes.
        alert("As senhas não coincidem!"); // Mostra uma mensagem quando as senhas não são iguais.
        return; // Interrompe a função se as senhas não coincidirem.
    } // Encerra a comparação das senhas.


    // 9. RESULTADO FINAL

    alert("Formulário validado! O cadastro real ainda precisa ser conectado ao Supabase."); // Esta mensagem só aparece se todas as verificações anteriores forem aprovadas.

}); // Encerra a função do evento submit e o addEventListener.
