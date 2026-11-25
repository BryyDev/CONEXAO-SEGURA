document.addEventListener('DOMContentLoaded', function () {


    /* Alerta do Botão Planejar Trajeto, para notificar que a função está  desenvolvimento, e estará disponivel em breve */
    // --- BOTÃO PLANEJAR TRAJETO ---
    const botaoPlanejar = document.querySelector('.btn-planejar');
    if (botaoPlanejar) {
        botaoPlanejar.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Em breve! O planejamento de trajetos estará disponível.');
        });
    }
    /* Alerta do Botão fale conosco, em desenvolvimento */
    // --- BOTÃO FALE CONOSCO ---
    const botaoFaleConosco = document.querySelector('.Mais-Sobre-o-Projeto-Button-Fale-Conosco');
    if (botaoFaleConosco) {
        botaoFaleConosco.addEventListener('click', function () {
            alert('Estamos trabalhando nisso! O formulário de contato estará disponível em breve.');
        });
    }

});

/* Animação para a sessão estátisticas, em que números vão subindo até pararem em seus devidos valores */
// --- ANIMAÇÃO DOS NÚMEROS ---
const numeros = document.querySelectorAll('.numero-contador');

// Função que anima um número específico
function animarNumero(elemento) {
    const valorFinal = parseInt(elemento.innerText); // Pega o número que está no HTML (ex: 8)
    let valorAtual = 0;
    const duracao = 2000; // 2 segundos de animação
    const passos = 50; // Quantas vezes o número vai mudar
    const incremento = valorFinal / passos;
    const tempo = duracao / passos;

    const contador = setInterval(() => {
        valorAtual += incremento;
        if (valorAtual >= valorFinal) {
            elemento.innerText = valorFinal; // Garante que termina no número exato
            clearInterval(contador); // Para o contador
        } else {
            elemento.innerText = Math.floor(valorAtual); // Mostra o número arredondado
        }
    }, tempo);
}

// Configura o "observador" que detecta quando a barra aparece na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarNumero(entry.target); // Se o número apareceu, anima ele
            observer.unobserve(entry.target); // Para de observar depois de animar (não anima duas vezes)
        }
    });
}, { threshold: 0.5 }); // 0.5 significa que a animação começa quando 50% do número estiver visível

// Manda o observador ficar de olho em cada número
numeros.forEach(numero => {
    observer.observe(numero);
});


/*Aqui criamos uma caixa personalizada de aviso que aparece quando clicamos no botão fale conosco, pois está em desenvolvimento. */
// --- BOTÃO FALE CONOSCO (CRIANDO MODAL) ---
const botaoFaleConosco = document.querySelector('.Mais-Sobre-o-Projeto-Button-Fale-Conosco');

if (botaoFaleConosco) {
    botaoFaleConosco.addEventListener('click', function (e) {
        e.preventDefault();

        // 1. Cria o fundo escuro
        const fundo = document.createElement('div');
        fundo.classList.add('modal-fundo'); // Adiciona a classe CSS

        // 2. Cria a caixinha branca
        const caixa = document.createElement('div');
        caixa.classList.add('modal-caixa');

        // 3. Cria os textos e o botão
        caixa.innerHTML = `
                <h2>Em desenvolvimento</h2>
                <p>Nossa equipe está trabalhando duro para criar o formulário de contato. Em breve você poderá falar conosco por aqui!</p>
                <button class="modal-btn-fechar">Entendi</button>
            `;

        // 4. Junta a caixa ao fundo, e o fundo ao corpo da página
        fundo.appendChild(caixa);
        document.body.appendChild(fundo);

        // 5. Faz o fundo aparecer (adicionando a classe "mostrar")
        // Usamos um pequeno atraso (setTimeout) para o navegador processar a criação antes de mostrar
        setTimeout(() => {
            fundo.classList.add('mostrar');
        }, 10);

        // 6. Lógica para fechar a caixinha
        const btnFechar = caixa.querySelector('.modal-btn-fechar');

        btnFechar.addEventListener('click', () => {
            fundo.classList.remove('mostrar'); // Esconde
            setTimeout(() => {
                fundo.remove(); // Destrói o elemento do HTML depois que sumir
            }, 300); // 300ms é o tempo da animação de CSS
        });

        // Opcional: Fechar se clicar fora da caixa (no fundo escuro)
        fundo.addEventListener('click', (evento) => {
            if (evento.target === fundo) {
                fundo.classList.remove('mostrar');
                setTimeout(() => { fundo.remove(); }, 300);
            }
        });
    });
}


/* Aqui criamos mais uma caixa personalizada de aviso que nós notifica de que a função no botão "Planejar o meu Trajeto" ainda está em desenvolvimento. */
// --- BOTÃO Planejar o meu Trajeto (CRIANDO MODAL) ---
const botaoPlanejarTrajeto = document.querySelector('.btn-planejar');

if (botaoPlanejarTrajeto) {
    botaoPlanejarTrajeto.addEventListener('click', function (e) {
        e.preventDefault();

        // 1. Cria o fundo escuro
        const fundo = document.createElement('div');
        fundo.classList.add('modal-fundo'); // Adiciona a classe CSS

        // 2. Cria a caixinha branca
        const caixa = document.createElement('div');
        caixa.classList.add('modal-caixa');

        // 3. Cria os textos e o botão
        caixa.innerHTML = `
                <h2>Em desenvolvimento</h2>
                <p>Nossa equipe está trabalhando duro para criar a função "Planejar o meu Trajeto". Em breve essa função estará disponível</p>
                <button class="modal-btn-fechar">Entendi</button>
            `;

        // 4. Junta a caixa ao fundo, e o fundo ao corpo da página
        fundo.appendChild(caixa);
        document.body.appendChild(fundo);

        // 5. Faz o fundo aparecer (adicionando a classe "mostrar")
        // Usamos um pequeno atraso (setTimeout) para o navegador processar a criação antes de mostrar
        setTimeout(() => {
            fundo.classList.add('mostrar');
        }, 10);

        // 6. Lógica para fechar a caixinha
        const btnFechar = caixa.querySelector('.modal-btn-fechar');

        btnFechar.addEventListener('click', () => {
            fundo.classList.remove('mostrar'); // Esconde
            setTimeout(() => {
                fundo.remove(); // Destrói o elemento do HTML depois que sumir
            }, 300); // 300ms é o tempo da animação de CSS
        });

        // Opcional: Fechar se clicar fora da caixa (no fundo escuro)
        fundo.addEventListener('click', (evento) => {
            if (evento.target === fundo) {
                fundo.classList.remove('mostrar');
                setTimeout(() => { fundo.remove(); }, 300);
            }
        });
    });
}

// --- LINKS "EM BREVE" (Mapa, Contato, Política) ---
const linksEmBreve = document.querySelectorAll('.Link-em-breve');

linksEmBreve.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o link de jogar pro topo ou recarregar
        alert('Ops! Esta página ainda está em desenvolvimento. Em breve estará disponível.');
    });
});