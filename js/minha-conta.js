
/* Dados pessoais */
const nomeCompleto = document.querySelector("#nome-completo") // Pega o campo onde a pessoa escreve o nome completo.
const dataNascimento = document.querySelector("#data-nascimento") // Pega o campo onde a pessoa escolhe a data de nascimento.
const genero = document.querySelector("#genero") // Pega a lista onde a pessoa escolhe o gênero.
const documento = document.querySelector("#documento") // Pega o campo opcional onde a pessoa escreve o CPF ou RG.

const nomeNaSaudacao = document.querySelector(".saudacao strong") /* pega somente a palavra usuario */

function salvarNome(nome) { // Recebe o nome que vamos guardar.
    localStorage.setItem("conexao-segura:nome", nome) // Guarda o nome no navegador.
}

/*  Quando você chama salvarNome(nomeDigitado), o "nome" entre parênteses recebe o valor de nomeDigitado. Se você digitou "João", dentro da função "nome" vale "João". */
 
function carregarNome() { // Busca o nome quando a página abre.
    return localStorage.getItem("conexao-segura:nome") || "" // Se ainda não tiver nome salvo, devolve um texto vazio.
}

function atualizarSaudacao(nome) { // Atualiza o nome que aparece depois do “Olá,”.
    if (nome === "") { // Confere se o nome está vazio.
        nomeNaSaudacao.textContent = "Usuário" // Mostra o texto padrão.
    } else {
        nomeNaSaudacao.textContent = nome // Mostra o nome recebido.
    }
}

const nomeSalvo = carregarNome() // Busca o nome salvo assim que a página abre.
nomeCompleto.value = nomeSalvo // Preenche o campo com o nome salvo.
atualizarSaudacao(nomeSalvo) // Mostra o mesmo nome no cabeçalho.

nomeCompleto.addEventListener("input", function () { // Roda sempre que a pessoa digita ou apaga algo.
    const nomeDigitado = nomeCompleto.value.trim() // Pega o nome e tira espaços das pontas.
    atualizarSaudacao(nomeDigitado) // Atualiza o cabeçalho na hora.
    salvarNome(nomeDigitado) // Guarda o nome atualizado no navegador.
})