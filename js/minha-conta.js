/* Cada campo segue a mesma sequência do nome: pegar, salvar, carregar e escutar as mudanças. */

/* Dados pessoais: pegando os elementos do HTML. */
const nomeCompleto = document.querySelector("#nome-completo") // Pega o campo onde a pessoa escreve o nome completo.
const dataNascimento = document.querySelector("#data-nascimento") // Pega o campo onde a pessoa escolhe a data de nascimento.
const genero = document.querySelector("#genero") // Pega a lista onde a pessoa escolhe o gênero.
const documento = document.querySelector("#documento") // Pega o campo opcional onde a pessoa escreve o CPF ou RG.
const nomeNaSaudacao = document.querySelector(".saudacao strong") // Pega somente o nome que aparece depois de Olá no cabeçalho.

/* Nome: mantendo o exemplo que você já começou. */
function salvarNome(nome) { // Recebe o nome que vamos guardar.
    localStorage.setItem("conexao-segura:nome", nome) // Guarda o nome no navegador usando a mesma chave do seu código.
} // Encerra a função que salva o nome.

/* Ao chamar salvarNome(nomeDigitado), o parâmetro nome recebe o valor da variável nomeDigitado. */
function carregarNome() { // Busca o nome quando a página abre.
    return localStorage.getItem("conexao-segura:nome") || "" // Se ainda não tiver nome salvo, devolve um texto vazio.
} // Encerra a função que carrega o nome.

function atualizarSaudacao(nome) { // Atualiza o nome que aparece depois de Olá.
    if (nome === "") { // Confere se o nome está vazio.
        nomeNaSaudacao.textContent = "Usuário" // Mostra o texto padrão quando não há nome.
    } else { // Executa a outra opção quando existe um nome.
        nomeNaSaudacao.textContent = nome // Mostra o nome recebido como texto no cabeçalho.
    } // Encerra a escolha entre o nome e o texto padrão.
} // Encerra a atualização da saudação.

const nomeSalvo = carregarNome() // Busca o nome salvo assim que a página abre.
nomeCompleto.value = nomeSalvo // Preenche o campo com o nome salvo.
atualizarSaudacao(nomeSalvo) // Mostra o mesmo nome no cabeçalho.

nomeCompleto.addEventListener("input", function () { // Roda sempre que a pessoa digita ou apaga algo no nome.
    const nomeDigitado = nomeCompleto.value.trim() // Lê o nome e tira os espaços das pontas.
    atualizarSaudacao(nomeDigitado) // Atualiza o cabeçalho na hora.
    salvarNome(nomeDigitado) // Guarda o nome atualizado no navegador.
}) // Encerra a função e o evento do campo de nome.

/* Data de nascimento. */
function salvarDataNascimento(valor) { // Recebe a data de nascimento que vamos guardar.
    localStorage.setItem("conexao-segura:data-nascimento", valor) // Guarda a data de nascimento em uma chave própria do navegador.
} // Encerra a função que salva a data de nascimento.

function carregarDataNascimento() { // Busca a data de nascimento que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:data-nascimento") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega a data de nascimento.

const dataNascimentoSalva = carregarDataNascimento() // Busca a data de nascimento assim que a página abre.
dataNascimento.value = dataNascimentoSalva // Devolve o valor salvo ao mesmo controle do formulário.

dataNascimento.addEventListener("change", function () { // Executa quando a pessoa confirma uma nova escolha neste controle.
    const dataEscolhida = dataNascimento.value // Lê o valor escolhido exatamente no formato fornecido pelo controle.
    salvarDataNascimento(dataEscolhida) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Gênero. */
function salvarGenero(valor) { // Recebe o gênero que vamos guardar.
    localStorage.setItem("conexao-segura:genero", valor) // Guarda o gênero em uma chave própria do navegador.
} // Encerra a função que salva o gênero.

function carregarGenero() { // Busca o gênero que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:genero") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o gênero.

const generoSalvo = carregarGenero() // Busca o gênero assim que a página abre.
genero.value = generoSalvo // Devolve o valor salvo ao mesmo controle do formulário.

genero.addEventListener("change", function () { // Executa quando a pessoa confirma uma nova escolha neste controle.
    const generoEscolhido = genero.value // Lê o valor escolhido exatamente no formato fornecido pelo controle.
    salvarGenero(generoEscolhido) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Documento. */
function salvarDocumento(valor) { // Recebe o documento que vamos guardar.
    localStorage.setItem("conexao-segura:documento", valor) // Guarda o documento em uma chave própria do navegador.
} // Encerra a função que salva o documento.

function carregarDocumento() { // Busca o documento que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:documento") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o documento.

const documentoSalvo = carregarDocumento() // Busca o documento assim que a página abre.
documento.value = documentoSalvo // Devolve o valor salvo ao mesmo controle do formulário.

documento.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const documentoDigitado = documento.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarDocumento(documentoDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* E-mail. */
const email = document.querySelector("#email") // Pega o controle do HTML onde a pessoa informa o e-mail.

function salvarEmail(valor) { // Recebe o e-mail que vamos guardar.
    localStorage.setItem("conexao-segura:email", valor) // Guarda o e-mail em uma chave própria do navegador.
} // Encerra a função que salva o e-mail.

function carregarEmail() { // Busca o e-mail que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:email") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o e-mail.

const emailSalvo = carregarEmail() // Busca o e-mail assim que a página abre.
email.value = emailSalvo // Devolve o valor salvo ao mesmo controle do formulário.

email.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const emailDigitado = email.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarEmail(emailDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Telefone. */
const telefone = document.querySelector("#telefone") // Pega o controle do HTML onde a pessoa informa o telefone.

function salvarTelefone(valor) { // Recebe o telefone que vamos guardar.
    localStorage.setItem("conexao-segura:telefone", valor) // Guarda o telefone em uma chave própria do navegador.
} // Encerra a função que salva o telefone.

function carregarTelefone() { // Busca o telefone que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:telefone") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o telefone.

const telefoneSalvo = carregarTelefone() // Busca o telefone assim que a página abre.
telefone.value = telefoneSalvo // Devolve o valor salvo ao mesmo controle do formulário.

telefone.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const telefoneDigitado = telefone.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarTelefone(telefoneDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Número do WhatsApp. */
const whatsapp = document.querySelector("#whatsapp") // Pega o controle do HTML onde a pessoa informa o número do WhatsApp.

function salvarWhatsapp(valor) { // Recebe o número do WhatsApp que vamos guardar.
    localStorage.setItem("conexao-segura:whatsapp", valor) // Guarda o número do WhatsApp em uma chave própria do navegador.
} // Encerra a função que salva o número do WhatsApp.

function carregarWhatsapp() { // Busca o número do WhatsApp que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:whatsapp") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o número do WhatsApp.

const whatsappSalvo = carregarWhatsapp() // Busca o número do WhatsApp assim que a página abre.
whatsapp.value = whatsappSalvo // Devolve o valor salvo ao mesmo controle do formulário.

whatsapp.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const whatsappDigitado = whatsapp.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarWhatsapp(whatsappDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Cidade: atualizando somente o nome da cidade no cabeçalho. */
const cidade = document.querySelector("#cidade") // Pega o controle do HTML onde a pessoa informa a cidade.
const cidadeNoPerfil = document.querySelector("#cidade-no-perfil") // Pega só o nome da cidade no cabeçalho; o texto UF fica separado no HTML.

function salvarCidade(valor) { // Recebe a cidade que vamos guardar.
    localStorage.setItem("conexao-segura:cidade", valor) // Guarda a cidade em uma chave própria do navegador.
} // Encerra a função que salva a cidade.

function carregarCidade() { // Busca a cidade que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:cidade") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega a cidade.

function atualizarCidade(cidade) { // Recebe o nome da cidade para mostrar no cabeçalho.
    if (cidade === "") { // Confere se o campo da cidade foi apagado.
        cidadeNoPerfil.textContent = "Sua cidade" // Volta ao texto padrão quando a cidade está vazia.
    } else { // Executa a outra opção quando a pessoa informou uma cidade.
        cidadeNoPerfil.textContent = cidade // Troca somente o nome da cidade, sem alterar o texto UF.
    } // Encerra a escolha entre a cidade e o texto padrão.
} // Encerra a atualização do nome da cidade no cabeçalho.

const cidadeSalva = carregarCidade() // Busca a cidade assim que a página abre.
cidade.value = cidadeSalva // Devolve o valor salvo ao mesmo controle do formulário.
atualizarCidade(cidadeSalva) // Mostra a cidade salva no cabeçalho e mantém UF como está no HTML.

cidade.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const cidadeDigitada = cidade.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    atualizarCidade(cidadeDigitada) // Atualiza imediatamente só o nome da cidade no cabeçalho.
    salvarCidade(cidadeDigitada) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Bairro. */
const bairro = document.querySelector("#bairro") // Pega o controle do HTML onde a pessoa informa o bairro.

function salvarBairro(valor) { // Recebe o bairro que vamos guardar.
    localStorage.setItem("conexao-segura:bairro", valor) // Guarda o bairro em uma chave própria do navegador.
} // Encerra a função que salva o bairro.

function carregarBairro() { // Busca o bairro que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:bairro") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o bairro.

const bairroSalvo = carregarBairro() // Busca o bairro assim que a página abre.
bairro.value = bairroSalvo // Devolve o valor salvo ao mesmo controle do formulário.

bairro.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const bairroDigitado = bairro.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarBairro(bairroDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Nome do contato de apoio. */
const contatoApoio = document.querySelector("#contato-apoio") // Pega o controle do HTML onde a pessoa informa o nome do contato de apoio.

function salvarContatoApoio(valor) { // Recebe o nome do contato de apoio que vamos guardar.
    localStorage.setItem("conexao-segura:contato-apoio", valor) // Guarda o nome do contato de apoio em uma chave própria do navegador.
} // Encerra a função que salva o nome do contato de apoio.

function carregarContatoApoio() { // Busca o nome do contato de apoio que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:contato-apoio") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o nome do contato de apoio.

const contatoApoioSalvo = carregarContatoApoio() // Busca o nome do contato de apoio assim que a página abre.
contatoApoio.value = contatoApoioSalvo // Devolve o valor salvo ao mesmo controle do formulário.

contatoApoio.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const contatoApoioDigitado = contatoApoio.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarContatoApoio(contatoApoioDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Telefone de apoio. */
const telefoneApoio = document.querySelector("#telefone-apoio") // Pega o controle do HTML onde a pessoa informa o telefone de apoio.

function salvarTelefoneApoio(valor) { // Recebe o telefone de apoio que vamos guardar.
    localStorage.setItem("conexao-segura:telefone-apoio", valor) // Guarda o telefone de apoio em uma chave própria do navegador.
} // Encerra a função que salva o telefone de apoio.

function carregarTelefoneApoio() { // Busca o telefone de apoio que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:telefone-apoio") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega o telefone de apoio.

const telefoneApoioSalvo = carregarTelefoneApoio() // Busca o telefone de apoio assim que a página abre.
telefoneApoio.value = telefoneApoioSalvo // Devolve o valor salvo ao mesmo controle do formulário.

telefoneApoio.addEventListener("input", function () { // Executa sempre que a pessoa digita ou apaga algo neste campo.
    const telefoneApoioDigitado = telefoneApoio.value.trim() // Lê o valor do campo e remove espaços do começo e do final.
    salvarTelefoneApoio(telefoneApoioDigitado) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Relação ou parentesco do contato de apoio. */
const relacaoApoio = document.querySelector("#relacao-apoio") // Pega o controle do HTML onde a pessoa informa a relação com o contato de apoio.

function salvarRelacaoApoio(valor) { // Recebe a relação com o contato de apoio que vamos guardar.
    localStorage.setItem("conexao-segura:relacao-apoio", valor) // Guarda a relação com o contato de apoio em uma chave própria do navegador.
} // Encerra a função que salva a relação com o contato de apoio.

function carregarRelacaoApoio() { // Busca a relação com o contato de apoio que foi guardado anteriormente.
    return localStorage.getItem("conexao-segura:relacao-apoio") || "" // Devolve o texto salvo ou um texto vazio quando ainda não existe valor.
} // Encerra a função que carrega a relação com o contato de apoio.

const relacaoApoioSalva = carregarRelacaoApoio() // Busca a relação com o contato de apoio assim que a página abre.
relacaoApoio.value = relacaoApoioSalva // Devolve o valor salvo ao mesmo controle do formulário.

relacaoApoio.addEventListener("change", function () { // Executa quando a pessoa confirma uma nova escolha neste controle.
    const relacaoEscolhida = relacaoApoio.value // Lê o valor escolhido exatamente no formato fornecido pelo controle.
    salvarRelacaoApoio(relacaoEscolhida) // Passa o valor lido para a função que salva no navegador.
}) // Encerra a função e o evento deste controle.

/* Caixas de seleção: checked informa se a opção está marcada ou desmarcada. */
/* O localStorage guarda textos. Por isso, ao carregar uma opção, comparamos o texto salvo com "true" para obter true ou false. */

/* Usar o mesmo número do telefone no WhatsApp. */
const mesmoNumeroWhatsapp = document.querySelector("#whatsapp-mesmo-numero") // Pega a caixa de seleção que controla esta opção.

function salvarMesmoNumeroWhatsapp(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:whatsapp-mesmo-numero", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarMesmoNumeroWhatsapp() { // Busca o estado que foi salvo para esta opção.
    const valorSalvo = localStorage.getItem("conexao-segura:whatsapp-mesmo-numero") // Busca o texto salvo, que pode ser "true", "false" ou null.
    if (valorSalvo === null) { // Confere se esta opção ainda nunca foi salva.
        return true // Mantém a opção inicialmente ligada, como já está no HTML.
    } // Encerra a verificação do primeiro acesso.
    return valorSalvo === "true" // Devolve true somente quando o texto salvo é "true", preservando também o estado desligado.
} // Encerra a função que carrega o estado desta opção.

const mesmoNumeroWhatsappSalvo = carregarMesmoNumeroWhatsapp() // Busca o estado desta opção quando a página abre.
mesmoNumeroWhatsapp.checked = mesmoNumeroWhatsappSalvo // Marca ou desmarca a caixa usando o estado que foi carregado.

mesmoNumeroWhatsapp.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = mesmoNumeroWhatsapp.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarMesmoNumeroWhatsapp(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Região de interesse 1. */
const regiao1 = document.querySelector("#regiao-1") // Pega a caixa de seleção que controla esta opção.

function salvarRegiao1(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:regiao-1", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarRegiao1() { // Busca o estado que foi salvo para esta opção.
    return localStorage.getItem("conexao-segura:regiao-1") === "true" // Devolve true se a opção foi salva ligada; sem valor salvo, mantém a opção desligada.
} // Encerra a função que carrega o estado desta opção.

const regiao1Salvo = carregarRegiao1() // Busca o estado desta opção quando a página abre.
regiao1.checked = regiao1Salvo // Marca ou desmarca a caixa usando o estado que foi carregado.

regiao1.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = regiao1.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarRegiao1(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Região de interesse 2. */
const regiao2 = document.querySelector("#regiao-2") // Pega a caixa de seleção que controla esta opção.

function salvarRegiao2(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:regiao-2", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarRegiao2() { // Busca o estado que foi salvo para esta opção.
    return localStorage.getItem("conexao-segura:regiao-2") === "true" // Devolve true se a opção foi salva ligada; sem valor salvo, mantém a opção desligada.
} // Encerra a função que carrega o estado desta opção.

const regiao2Salvo = carregarRegiao2() // Busca o estado desta opção quando a página abre.
regiao2.checked = regiao2Salvo // Marca ou desmarca a caixa usando o estado que foi carregado.

regiao2.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = regiao2.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarRegiao2(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Região de interesse 3. */
const regiao3 = document.querySelector("#regiao-3") // Pega a caixa de seleção que controla esta opção.

function salvarRegiao3(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:regiao-3", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarRegiao3() { // Busca o estado que foi salvo para esta opção.
    return localStorage.getItem("conexao-segura:regiao-3") === "true" // Devolve true se a opção foi salva ligada; sem valor salvo, mantém a opção desligada.
} // Encerra a função que carrega o estado desta opção.

const regiao3Salvo = carregarRegiao3() // Busca o estado desta opção quando a página abre.
regiao3.checked = regiao3Salvo // Marca ou desmarca a caixa usando o estado que foi carregado.

regiao3.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = regiao3.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarRegiao3(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Receber alertas da minha região. */
const alertasRegiao = document.querySelector("#alertas-regiao") // Pega a caixa de seleção que controla esta opção.

function salvarAlertasRegiao(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:alertas-regiao", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarAlertasRegiao() { // Busca o estado que foi salvo para esta opção.
    const valorSalvo = localStorage.getItem("conexao-segura:alertas-regiao") // Busca o texto salvo, que pode ser "true", "false" ou null.
    if (valorSalvo === null) { // Confere se esta opção ainda nunca foi salva.
        return true // Mantém a opção inicialmente ligada, como já está no HTML.
    } // Encerra a verificação do primeiro acesso.
    return valorSalvo === "true" // Devolve true somente quando o texto salvo é "true", preservando também o estado desligado.
} // Encerra a função que carrega o estado desta opção.

const alertasRegiaoSalvo = carregarAlertasRegiao() // Busca o estado desta opção quando a página abre.
alertasRegiao.checked = alertasRegiaoSalvo // Marca ou desmarca a caixa usando o estado que foi carregado.

alertasRegiao.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = alertasRegiao.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarAlertasRegiao(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Compartilhar localização durante trajetos. */
const compartilharLocalizacao = document.querySelector("#compartilhar-localizacao") // Pega a caixa de seleção que controla esta opção.

function salvarCompartilharLocalizacao(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:compartilhar-localizacao", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarCompartilharLocalizacao() { // Busca o estado que foi salvo para esta opção.
    return localStorage.getItem("conexao-segura:compartilhar-localizacao") === "true" // Devolve true se a opção foi salva ligada; sem valor salvo, mantém a opção desligada.
} // Encerra a função que carrega o estado desta opção.

const compartilharLocalizacaoSalvo = carregarCompartilharLocalizacao() // Busca o estado desta opção quando a página abre.
compartilharLocalizacao.checked = compartilharLocalizacaoSalvo // Marca ou desmarca a caixa usando o estado que foi carregado.

compartilharLocalizacao.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = compartilharLocalizacao.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarCompartilharLocalizacao(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Receber notificações da comunidade. */
const notificacoesComunidade = document.querySelector("#notificacoes-comunidade") // Pega a caixa de seleção que controla esta opção.

function salvarNotificacoesComunidade(marcado) { // Recebe true para a opção marcada ou false para a opção desmarcada.
    localStorage.setItem("conexao-segura:notificacoes-comunidade", marcado) // Guarda o estado da opção; o navegador transforma o valor em texto.
} // Encerra a função que salva o estado desta opção.

function carregarNotificacoesComunidade() { // Busca o estado que foi salvo para esta opção.
    const valorSalvo = localStorage.getItem("conexao-segura:notificacoes-comunidade") // Busca o texto salvo, que pode ser "true", "false" ou null.
    if (valorSalvo === null) { // Confere se esta opção ainda nunca foi salva.
        return true // Mantém a opção inicialmente ligada, como já está no HTML.
    } // Encerra a verificação do primeiro acesso.
    return valorSalvo === "true" // Devolve true somente quando o texto salvo é "true", preservando também o estado desligado.
} // Encerra a função que carrega o estado desta opção.

const notificacoesComunidadeSalvo = carregarNotificacoesComunidade() // Busca o estado desta opção quando a página abre.
notificacoesComunidade.checked = notificacoesComunidadeSalvo // Marca ou desmarca a caixa usando o estado que foi carregado.

notificacoesComunidade.addEventListener("change", function () { // Executa quando a pessoa marca ou desmarca esta opção.
    const opcaoMarcada = notificacoesComunidade.checked // Lê true ou false pela propriedade checked, em vez de usar value.
    salvarNotificacoesComunidade(opcaoMarcada) // Guarda o estado atual da opção no navegador.
}) // Encerra a função e o evento desta opção.

/* Botão Salvar alterações: reúne as mesmas funções que já salvam cada campo. */
const botaoSalvar = document.querySelector(".botao-salvar") // Pega o botão principal do formulário.

botaoSalvar.addEventListener("click", function () { // Executa quando a pessoa clica em Salvar alterações.
    const nomeDigitado = nomeCompleto.value.trim() // Lê o nome atual, retirando os espaços das pontas.
    const cidadeDigitada = cidade.value.trim() // Lê a cidade atual, retirando os espaços das pontas.
    salvarNome(nomeDigitado) // Guarda o nome com a função que você já começou.
    salvarDataNascimento(dataNascimento.value) // Guarda a data de nascimento que está no controle agora.
    salvarGenero(genero.value) // Guarda o gênero que está no controle agora.
    salvarDocumento(documento.value.trim()) // Guarda o documento que está no controle agora.
    salvarEmail(email.value.trim()) // Guarda o e-mail que está no controle agora.
    salvarTelefone(telefone.value.trim()) // Guarda o telefone que está no controle agora.
    salvarWhatsapp(whatsapp.value.trim()) // Guarda o número do WhatsApp que está no controle agora.
    salvarCidade(cidadeDigitada) // Guarda a cidade que está no controle agora.
    salvarBairro(bairro.value.trim()) // Guarda o bairro que está no controle agora.
    salvarContatoApoio(contatoApoio.value.trim()) // Guarda o nome do contato de apoio que está no controle agora.
    salvarTelefoneApoio(telefoneApoio.value.trim()) // Guarda o telefone de apoio que está no controle agora.
    salvarRelacaoApoio(relacaoApoio.value) // Guarda a relação com o contato de apoio que está no controle agora.
    salvarMesmoNumeroWhatsapp(mesmoNumeroWhatsapp.checked) // Guarda o estado da opção usar o mesmo número do telefone no whatsapp.
    salvarRegiao1(regiao1.checked) // Guarda o estado da opção região de interesse 1.
    salvarRegiao2(regiao2.checked) // Guarda o estado da opção região de interesse 2.
    salvarRegiao3(regiao3.checked) // Guarda o estado da opção região de interesse 3.
    salvarAlertasRegiao(alertasRegiao.checked) // Guarda o estado da opção receber alertas da minha região.
    salvarCompartilharLocalizacao(compartilharLocalizacao.checked) // Guarda o estado da opção compartilhar localização durante trajetos.
    salvarNotificacoesComunidade(notificacoesComunidade.checked) // Guarda o estado da opção receber notificações da comunidade.
    atualizarSaudacao(nomeDigitado) // Mantém a saudação de acordo com o nome que acabou de ser salvo.
    atualizarCidade(cidadeDigitada) // Mantém o cabeçalho de acordo com a cidade salva, sem modificar UF.
    alert("Alterações salvas neste navegador.") // Confirma o salvamento local sem afirmar que os dados foram enviados a um servidor.
}) // Encerra a função e o evento do botão de salvar.


/* Escolher uma foto pela câmera e mostrar no perfil. */

const botaoFoto = document.querySelector(".botao-foto") // Pega o botão da câmera.
const arquivoFoto = document.querySelector("#arquivo-foto") // Pega o campo de arquivo escondido.
const fotoPerfil = document.querySelector("#foto-perfil") // Pega a imagem do círculo.
const iniciaisAvatar = document.querySelector(".iniciais-avatar") // Pega a letra U.

let enderecoFotoPerfil = "" // Guarda o endereço temporário da foto atual.

botaoFoto.addEventListener("click", function () {
    arquivoFoto.click() // Abre o seletor de fotos.
})

arquivoFoto.addEventListener("change", function () {
    const fotoEscolhida = arquivoFoto.files[0] // Pega a foto que você escolheu.
    if (!fotoEscolhida) return // Se você cancelou, mantém o avatar como está.

    if (enderecoFotoPerfil) {
        URL.revokeObjectURL(enderecoFotoPerfil) // Libera o endereço da foto anterior.
    }

    enderecoFotoPerfil = URL.createObjectURL(fotoEscolhida) // Cria um endereço para a nova foto.
    fotoPerfil.src = enderecoFotoPerfil // Coloca a foto na imagem do perfil.
    fotoPerfil.hidden = false // Mostra a foto.
    iniciaisAvatar.hidden = true // Esconde o U.
    arquivoFoto.value = "" // Permite escolher a mesma foto outra vez.
})