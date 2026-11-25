const carrossel = document.querySelector('.carrossel-videos');
const player = carrossel.querySelector('video');
const mensagem = carrossel.querySelector('.carrossel-video-indisponivel');
const estado = carrossel.querySelector('.carrossel-videos-estado');
const seletores = [
    carrossel.querySelector('.carrossel-video-meio'),
    carrossel.querySelector('.carrossel-video-fundo'),
];

const videos = [
    { arquivo: player.getAttribute('src'), rotulo: 'Pitch do Conexão Segura' },
    { arquivo: null, rotulo: 'Vídeo 2' },
    { arquivo: null, rotulo: 'Vídeo 3' },
];
let ativo = 0;

function selecionarVideo(indice) {
    ativo = indice;
    const video = videos[indice];
    player.pause();
    player.hidden = !video.arquivo;
    mensagem.hidden = Boolean(video.arquivo);
    player.setAttribute('aria-label', video.rotulo);
    if (video.arquivo) {
        player.src = video.arquivo;
        player.play().catch(() => {
            // Os controles nativos continuam disponíveis se a reprodução automática for bloqueada.
        });
    } else {
        player.removeAttribute('src');
        player.load();
    }

    seletores.forEach((botao, posicao) => {
        const numero = (indice + posicao + 1) % videos.length + 1;
        botao.dataset.video = String(numero);
        botao.setAttribute('aria-label', 'Selecionar vídeo ' + numero);
        botao.querySelector('span').textContent = String(numero).padStart(2, '0');
    });
    estado.textContent = 'Vídeo ' + (indice + 1) + ' de ' + videos.length
        + (video.arquivo ? '' : ' — indisponível');
}

seletores.forEach(botao => {
    botao.addEventListener('click', () => selecionarVideo(Number(botao.dataset.video) - 1));
});
player.addEventListener('ended', () => selecionarVideo((ativo + 1) % videos.length));
