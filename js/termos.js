// Página Termos de Uso
const cards = [['#e8effc', '#1763f0', 'Apoio, não garantia', 'Rotas e alertas ajudam você a decidir, mas não eliminam riscos.', 'life'],
['#fdecea', '#c0392b', 'Emergência? Ligue 190, 192 ou 193', 'O Conexão Segura não substitui polícia, SAMU ou bombeiros.', 'phone'],
['#fdf2dc', '#b7791f', 'Alertas da comunidade', 'Podem estar incompletos, atrasados ou errados. Confira antes de decidir.', 'bell'],
['#e3f6ee', '#0f9d6e', 'Sua localização é sua', 'Só usamos com a sua permissão, e você pode desligar quando quiser.', 'life'],
['#e8effc', '#1763f0', 'Respeito acima de tudo', 'Nada de ameaças, exposição de pessoas ou conteúdo ilegal.', 'flag']];
document.getElementById('cards5').innerHTML = cards.map(c => `<div class="mini"><i style="background:${c[0]}">${svg(c[4], c[1], 16)}</i><b>${c[2]}</b><p>${c[3]}</p></div>`).join('');

const ch = '<span class="chip"><b>190</b>Polícia Militar</span><span class="chip"><b>192</b>SAMU</span><span class="chip"><b>193</b>Bombeiros</span><span class="chip"><b>199</b>Defesa Civil</span>';
document.getElementById('chipsTop').innerHTML = ch;

const S = [
    ['Sobre o serviço e aceitação', 'Ao usar o Conexão Segura, você concorda com estas regras.', 0, [
        ['O Conexão Segura é uma plataforma digital que reúne notícias, mapas, alertas colaborativos e ferramentas de planejamento de trajetos para apoiar o deslocamento e o acesso a informações da sua região.'],
        ['Ao acessar ou utilizar o serviço, você declara que leu, entendeu e concorda com estes Termos de Uso e com a Política de Privacidade. Se não concordar, não utilize o serviço.'],
        ['O serviço é mantido por [nome do responsável / razão social], inscrito(a) no [CPF/CNPJ], doravante chamado(a) de "Conexão Segura".']]],
    ['Cadastro e conta', 'Use dados verdadeiros e cuide da sua senha.', 0, [
        ['Alguns recursos exigem conta. Você deve informar dados verdadeiros, completos e atualizados.'],
        ['Você é responsável pela guarda das suas credenciais e por toda atividade feita na sua conta. Avise-nos imediatamente se suspeitar de acesso indevido.'],
        ['É proibido criar contas falsas, usar a conta de outra pessoa ou ceder a sua.'],
        ['O cadastro é destinado a maiores de 18 anos. Adolescentes de 12 a 17 anos só podem usar o serviço com ciência e autorização de pai, mãe ou responsável legal. Crianças menores de 12 anos não devem criar conta.']]],
    ['Mapas, rotas e alertas', 'As informações ajudam, mas podem estar erradas ou desatualizadas.', 0, [
        ['Rotas, classificações de segurança, alertas e demais informações são embasadas em dados públicos, de parceiros e em relatos da comunidade. Podem estar incompletas, desatualizadas ou conter erros.'],
        ['A "rota mais segura" é a mais indicada segundo os critérios do serviço, como iluminação, movimento e alertas recentes. Isso não significa um trajeto livre de riscos.'],
        ['A ausência de alertas em um trecho não indica que ele seja seguro, e a presença de alertas não significa que o local seja perigoso.'],
        ['Antes de seguir um trajeto, confira as condições reais do local. Se sentir insegurança, escolha outro caminho, horário ou meio de transporte, ou procure ajuda.']]],
    ['Riscos e limites do serviço', 'Nenhum serviço elimina riscos. A decisão final sobre o seu trajeto é sempre sua.', 1, [
        ['O deslocamento envolve riscos que nenhuma ferramenta consegue eliminar, como crimes, acidentes, alagamentos, falhas de iluminação e outros eventos imprevisíveis. Eles podem ocorrer mesmo que você siga as orientações do serviço.'],
        ['Você reconhece que a decisão sobre o trajeto, o horário e o meio de deslocamento é exclusivamente sua, e que usa as informações do serviço como apoio, e não como garantia de segurança.'],
        ['Não utilize o aplicativo enquanto dirige, pedala ou atravessa ruas. Mantenha atenção ao ambiente à sua volta.'],
        ['Funções como compartilhar trajeto e contatos de emergência dependem de internet, GPS, bateria e permissões do aparelho, e podem falhar ou atrasar.'],
        ['O Conexão Segura não substitui os serviços públicos de emergência. Em caso de perigo, ligue imediatamente:<div class="chips" style="margin-top:8px">' + ch + '</div>']]],
    ['Participação da comunidade', 'Compartilhe com responsabilidade: só informações verdadeiras e sem expor ninguém.', 0, [
        ['Você é responsável por tudo que publica, como alertas, comentários, notas e imagens.'],
        ['Publique apenas informações que acredita serem verdadeiras. Identifique opiniões como opiniões e não apresente suspeitas como fatos.'],
        ['É proibido publicar:', ['Ameaças, discriminação ou assédio.', 'Acusações sem fundamento contra pessoas identificáveis.', 'Dados pessoais de terceiros, como rostos, placas de veículos e endereços residenciais.', 'Conteúdo ilegal, spam e alertas falsos ou enganosos de propósito.']],
        ['Ao publicar, você autoriza o Conexão Segura, de forma gratuita e não exclusiva, a armazenar, exibir e reproduzir o conteúdo no serviço, para fins de operação da plataforma. Os direitos sobre o conteúdo continuam com você.'],
        ['Podemos analisar, ocultar ou remover conteúdos que violem estes termos ou a lei. Você pode denunciar conteúdos pelo canal oficial.']]],
    ['Terceiros e propriedade intelectual', 'Respeite a autoria. Notícias e links externos não são de responsabilidade do Conexão Segura.', 0, [
        ['Notícias, imagens, mapas e dados de terceiros pertencem aos seus titulares. Indicamos a fonte sempre que possível e não garantimos a exatidão desses conteúdos.'],
        ['A marca, o logotipo, o design, os textos e o código do Conexão Segura são protegidos por lei. Não é permitido copiar, modificar ou distribuir esses materiais sem autorização, salvo nos casos previstos em lei.'],
        ['O serviço pode conter links para sites externos. Não controlamos esses sites e não nos responsabilizamos por seu conteúdo ou por suas políticas.']]],
    ['Privacidade e localização', 'Sua localização só é usada com a sua permissão, e você pode desativar quando quiser.', 0, [
        ['O tratamento de dados pessoais segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e a Política de Privacidade, que explica quais dados coletamos, para que os usamos e por quanto tempo.'],
        ['A localização só é coletada com a sua permissão. Você pode desativá-la a qualquer momento no aparelho ou na conta, e algumas funções podem deixar de funcionar.'],
        ['Proteja a sua própria exposição: evite divulgar o endereço de casa, a rotina e horários fixos. Ao compartilhar um trajeto, escolha apenas pessoas de confiança. Você é responsável por com quem compartilha.'],
        ['Você pode solicitar acesso, correção ou exclusão dos seus dados pelo contato do Encarregado de Proteção de Dados: [e-mail do encarregado].']]],
    ['Condutas proibidas', 'Não use o serviço para prejudicar pessoas ou o próprio sistema.', 0, [
        ['É proibido usar o Conexão Segura para:', ['Praticar ou facilitar crimes.', 'Perseguir, vigiar ou localizar pessoas sem consentimento.', 'Manipular alertas, avaliações ou rotas.', 'Tentar acessar áreas restritas, sistemas ou contas de terceiros.', 'Coletar dados em massa por meios automatizados.', 'Prejudicar o funcionamento do serviço.']],
        ['O descumprimento pode levar à remoção de conteúdo, à suspensão ou ao encerramento da conta, sem prejuízo das medidas legais cabíveis.']]],
    ['Disponibilidade e atualizações', 'O serviço pode falhar, mudar ou ficar fora do ar.', 0, [
        ['O serviço é oferecido "no estado em que se encontra" e conforme a disponibilidade. Pode haver manutenção, lentidão, falhas ou erros, inclusive por motivos alheios ao nosso controle, como queda de internet ou de serviços de terceiros.'],
        ['Podemos alterar, suspender ou encerrar funcionalidades a qualquer momento, buscando avisar com antecedência sempre que possível.']]],
    ['Limitação de responsabilidade', 'Não nos responsabilizamos por situações fora do nosso controle, dentro dos limites da lei.', 1, [
        ['Na medida permitida pela lei, o Conexão Segura não se responsabiliza por danos decorrentes de:', ['Decisões tomadas com base nas informações do serviço.', 'Atos de terceiros, como crimes e acidentes, e eventos naturais.', 'Conteúdos publicados por usuários ou por terceiros.', 'Falhas de internet, GPS, bateria ou do aparelho.', 'Uso indevido da conta por você ou por quem tenha acesso a ela.']],
        ['Nada nestes termos exclui ou limita direitos que a lei não permite afastar, como os previstos no Código de Defesa do Consumidor (Lei nº 8.078/1990), quando aplicável, nem a responsabilidade por dolo.']]],
    ['Suspensão e encerramento', 'Você pode sair quando quiser. Contas que violarem as regras podem ser suspensas.', 0, [
        ['Você pode encerrar a sua conta a qualquer momento pelas configurações ou pelo canal de contato.'],
        ['Podemos suspender ou encerrar contas que violem estes termos ou a lei, ou que causem prejuízo a outros usuários, com ou sem aviso, quando necessário.'],
        ['Após o encerramento, os dados e conteúdos serão tratados conforme a Política de Privacidade e a legislação aplicável.']]],
    ['Alterações destes termos', 'Se algo mudar, avisamos e mostramos a nova data de vigência.', 0, [
        ['Podemos atualizar estes termos para refletir mudanças no serviço ou na lei. A versão vigente indicará o número e a data, e as mudanças relevantes serão destacadas e comunicadas.'],
        ['Se continuar usando o serviço após a atualização, você concorda com a nova versão. Se não concordar, deve parar de usá-lo e pode encerrar a sua conta.']]],
    ['Lei aplicável, foro e contato', 'Valem as leis brasileiras. Fale com a gente pelo e-mail oficial.', 0, [
        ['Estes termos são regidos pelas leis da República Federativa do Brasil.'],
        ['Fica eleito o foro da comarca de [cidade/UF] para resolver dúvidas decorrentes destes termos, ressalvado o direito do consumidor de propor ação no foro do seu domicílio, quando aplicável.'],
        ['Dúvidas, denúncias e solicitações podem ser enviadas para [e-mail de contato oficial].']]]];
const pad = n => String(n).padStart(2, '0');
document.getElementById('toc').innerHTML = S.map((s, i) => `<a href="#sec-${i + 1}" data-s="${i + 1}"><em>${pad(i + 1)}</em>${s[0]}</a>`).join('');
document.getElementById('secs').innerHTML = S.map((s, i) => `<section class="sec ${s[2] ? 'risk' : ''}" id="sec-${i + 1}"><h3><span>${i + 1}</span>${s[0]}</h3><div class="resumo">Em resumo: ${s[1]}</div>${s[3].map((c, j) => `<div class="cl"><b>${i + 1}.${j + 1}</b><div>${c[0]}${c[1] ? '<ul>' + c[1].map(x => '<li>' + x + '</li>').join('') + '</ul>' : ''}</div></div>`).join('')}</section>`).join('');