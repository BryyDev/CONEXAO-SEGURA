
console.log("Página 404 conectada ao JavaScript!"); // Confirma no F12 que o arquivo foi carregado.


// 1. CAPTURANDO OS ELEMENTOS DO HTML

const pagina = document.querySelector(".error-page"); // Seleciona a área principal da página 404.
const estrelas = document.querySelector(".stars"); // Seleciona as estrelas decorativas.
const brilho = document.querySelector(".background-glow"); // Seleciona a iluminação de fundo.


// 2. VERIFICANDO SE O USUÁRIO PERMITE ANIMAÇÕES

const permitirAnimacao = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches; // Verifica se o dispositivo usa mouse e se o usuário não pediu redução de movimentos.


// 3. PREPARANDO OS MOVIMENTOS

if (permitirAnimacao && pagina && estrelas && brilho) { // && sigifica E, ele verifica se 2 informações sao verdadeiras ao mesmo tempo e | Só executa se as animações forem permitidas e os elementos existirem.

    estrelas.style.transition = "transform 180ms ease-out"; // Faz as estrelas se moverem suavemente.
    brilho.style.transition = "transform 280ms ease-out"; // Faz a iluminação se mover mais lentamente.


    // 4. DETECTANDO O MOVIMENTO DO MOUSE

    pagina.addEventListener("pointermove", function(evento) { // Executa quando o ponteiro se movimenta sobre a página.

        const largura = pagina.clientWidth; // Pega a largura da página.
        const altura = pagina.clientHeight; // Pega a altura da página.

        const posicaoX = evento.clientX / largura - 0.5; // Calcula a posição horizontal do mouse.
        const posicaoY = evento.clientY / altura - 0.5; // Calcula a posição vertical do mouse.

        estrelas.style.transform = `translate(${posicaoX * 12}px, ${posicaoY * 12}px)`; // Move as estrelas até aproximadamente 6px em cada direção.
        brilho.style.transform = `translate(${posicaoX * 20}px, ${posicaoY * 20}px)`; // Move a iluminação até aproximadamente 10px em cada direção.

    }); // Encerra o evento de movimento.


    // 5. RETORNANDO OS ELEMENTOS À POSIÇÃO ORIGINAL

    pagina.addEventListener("pointerleave", function() { // Detecta quando o ponteiro sai da página.

        estrelas.style.transform = "translate(0, 0)"; // Retorna as estrelas à posição original.
        brilho.style.transform = "translate(0, 0)"; // Retorna a iluminação à posição original.

    }); // Encerra o evento de saída do ponteiro.

} // Encerra a condição que permite as animações.
