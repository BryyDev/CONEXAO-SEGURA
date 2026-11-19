// Página Ferramentas
const tools = [
    ['route', 'Rotas seguras', 'Informe origem e destino e compare caminhos pelo nível de segurança.', 1, '#mapa'],
    ['bell', 'Alertas da comunidade', 'Veja o que moradores relatam perto de você, em tempo real.', 0, '#alertas'],
    ['flag', 'Reportar ocorrência', 'Avise a comunidade sobre obras, alagamentos, iluminação ou risco.', 0, '#reportar'],
    ['share', 'Compartilhar trajeto', 'Envie seu caminho a alguém de confiança e deixe acompanhar sua chegada.', 0, '#compartilhar'],
    ['life', 'Pontos de apoio', 'Encontre locais seguros e abertos para se abrigar durante o trajeto.', 0, '#apoio'],
    ['phone', 'Contatos de emergência', 'Cadastre pessoas e serviços para acionar rapidamente quando precisar.', 0, '#contatos']];
document.getElementById('tools').innerHTML = tools.map(t => `<a class="tool" href="${t[4]}"><span class="ico ${t[3] ? 'g' : ''}">${svg(t[0], t[3] ? '#0b2347' : '#fff')}</span><h3>${t[1]}</h3><p>${t[2]}</p><span class="open">Abrir ${svg('arrow', 'currentColor', 16)}</span></a>`).join('');