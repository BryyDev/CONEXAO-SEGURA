(function () {
  'use strict';

  // const = valor que NÃO é trocado depois (a maioria das variáveis daqui)
  // let   = valor que MUDA ao longo do código (contadores e o link "atual" do menu)

  // Aviso para conferir no Console (F12) se o script carregou
  console.log('noticias: JavaScript carregado');

  // Lê ou grava um valor no navegador (localStorage).
  //   store('chave')        -> lê
  //   store('chave', valor) -> grava
  // O try/catch evita erro caso o navegador bloqueie o armazenamento.
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  // Escreve um aviso no <p id="status"> (invisível na tela),
  // para leitores de tela avisarem o que aconteceu.
  const status = document.getElementById('status');
  function say(msg) { if (status) status.textContent = msg; }

  /* FILTROS (TODOS, SEGURANÇA, CLIMA...)*/

  const chips  = document.querySelectorAll('.chip');             // botões de filtro
  const items  = document.querySelectorAll('[data-cat]');        // tudo que tem categoria (cards e relatos)
  const empty  = document.getElementById('empty');               // mensagem "nenhuma notícia"
  const latest = document.querySelectorAll('#ultimas .news-card'); // cards de "Últimas notícias"

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      const f = chip.dataset.filter; // categoria do botão (ex.: "clima")

      // Só o botão clicado recebe a classe "active" (é ela que deixa amarelo)
      chips.forEach(function (c) {
        const on = c === chip;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', on);
      });

      // Mostra o card se o filtro for "todos" ou se a categoria for igual; senão esconde
      items.forEach(function (el) {
        el.hidden = !(f === 'todos' || el.dataset.cat === f);
      });

      // Se nenhum card de "Últimas notícias" ficou visível, mostra a mensagem
      let visible = 0; // let porque o número aumenta a cada card visível
      latest.forEach(function (el) { if (!el.hidden) visible++; });
      if (empty) empty.hidden = visible > 0;
    });
  });


  // Cria o comportamento "liga/desliga" de um botão.
  //   id       -> id do botão no HTML
  //   onLabel  -> texto quando ligado (ex.: "curtido")
  //   offLabel -> texto quando desligado (ex.: "curtir")
  //   key      -> nome usado para lembrar a escolha no navegador
  function toggleBtn(id, onLabel, offLabel, key) {
    const btn = document.getElementById(id);
    if (!btn) return;
    const label = btn.querySelector('span');

    function set(on) {
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on);
      label.textContent = on ? onLabel : offLabel;
    }

    set(store(key) === '1');            // ao abrir a página, lembra o último estado
    btn.addEventListener('click', function () {
      const on = !btn.classList.contains('active'); // inverte o estado
      set(on);
      store(key, on ? '1' : '0');       // grava para a próxima visita
    });
  }
  toggleBtn('btn-like', 'curtido', 'curtir', 'cs-like');
  toggleBtn('btn-save', 'salvo', 'salvar', 'cs-save');


  // Liga/desliga o curtir do comentário e soma ou subtrai 1 no número
  function bindCommentLike(btn) {
    btn.addEventListener('click', function () {
      const count = btn.querySelector('span');
      const on = !btn.classList.contains('active');
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on);
      count.textContent = Number(count.textContent) + (on ? 1 : -1);
    });
  }
  // Aplica nos comentários que já estão no HTML
  document.querySelectorAll('.c-like').forEach(bindCommentLike);

  const share = document.getElementById('btn-share');
  if (share) {
    share.addEventListener('click', function () {
      const label = share.querySelector('span');
      const data = {
        title: 'Conexão Segura',
        text: 'Moradores relatam novo aumento de assaltos na região',
        url: location.href
      };
      if (navigator.share) {
        // Celular: abre o menu de compartilhar do sistema
        navigator.share(data).catch(function () {});
      } else if (navigator.clipboard) {
        // Computador: copia o link e avisa por 2 segundos
        navigator.clipboard.writeText(location.href).then(function () {
          label.textContent = 'link copiado';
          say('Link copiado');
          setTimeout(function () { label.textContent = 'compartilhar'; }, 2000);
        });
      }
    });
  }

  const form       = document.getElementById('comment-form');
  const input      = document.getElementById('comment-input');
  const error      = document.getElementById('comment-error');
  const btnComment = document.getElementById('btn-comment');

  // Botão "comentar": só leva o cursor para o campo de texto
  if (btnComment && input) {
    btnComment.addEventListener('click', function () { input.focus(); });
  }

  if (form) {
    // Ao digitar, some o aviso de erro
    input.addEventListener('input', function () { error.hidden = true; });

    form.addEventListener('submit', function (e) {
      e.preventDefault();               // impede a página de recarregar
      const text = input.value.trim();  // tira espaços do começo e do fim

      // Comentário vazio: mostra o erro e para por aqui
      if (!text) { error.hidden = false; input.focus(); return; }

      // Monta o HTML do novo comentário (igual aos que já existem na página)
      const wrap = document.createElement('div');
      wrap.className = 'comment new';

      const av = document.createElement('span');
      av.className = 'avatar sm';

      const body = document.createElement('div');
      const name = document.createElement('strong');
      name.textContent = 'Você ';
      const time = document.createElement('small');
      time.textContent = 'agora';
      name.appendChild(time);

      const p = document.createElement('p');
      p.textContent = text; // textContent (e não innerHTML) evita que alguém injete código

      const meta = document.createElement('small');
      meta.className = 'reply';
      const like = document.createElement('button');
      like.type = 'button';
      like.className = 'c-like';
      like.setAttribute('aria-pressed', 'false');
      like.innerHTML = '<img src="../assets/noticias-mapa/Thumbs Up.png" alt="">Responder I curtir <span>0</span>';
      meta.appendChild(like);
      bindCommentLike(like); // faz o curtir do novo comentário funcionar

      body.append(name, p, meta);
      wrap.append(av, body);
      form.parentNode.insertBefore(wrap, form); // coloca o comentário acima do formulário

      input.value = '';  // limpa o campo
      say('Comentário publicado');
    });
  }

  // Só o item clicado recebe "active" (fundo azul); os outros perdem
  const live = document.querySelectorAll('.live-item');
  live.forEach(function (btn) {
    btn.addEventListener('click', function () {
      live.forEach(function (b) {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on);
      });
    });
  });
  /* MENU: TRAÇO AMARELO QUE SE MOVE  */

  // Em vez de um traço fixo embaixo de "Notícias", existe UM traço só que desliza:
  //  - passou o mouse (ou Tab) em um link -> o traço vai para ele
  //  - tirou o mouse do menu              -> o traço volta para o link "atual"
  //  - clicou em uma seção (#mapa etc.)   -> esse link passa a ser o "atual"
  const nav = document.querySelector('.nav');
  if (nav) {
    const navLinks = nav.querySelectorAll('a');
    let current = nav.querySelector('[aria-current]'); // onde o traço "descansa" (começa em Notícias). let porque troca ao clicar

    // Cria o traço e avisa o CSS que o JS está ativo (assim o CSS esconde os traços antigos)
    const bar = document.createElement('span');
    bar.className = 'nav-indicator';
    bar.setAttribute('aria-hidden', 'true');
    nav.appendChild(bar);
    nav.classList.add('has-indicator');

    // Leva o traço para baixo de um link: ajusta a largura e a posição (x e y)
    function moveBar(link) {
      if (!link) { bar.style.opacity = '0'; return; } // sem link atual: esconde o traço
      bar.style.opacity = '1';
      bar.style.width = link.offsetWidth + 'px';
      bar.style.transform = 'translate(' + link.offsetLeft + 'px,' + (link.offsetTop + link.offsetHeight - 1) + 'px)';
    }

    // Coloca o traço no lugar SEM animação (usado ao abrir a página e ao redimensionar)
    function snap() {
      bar.classList.remove('ready');   // sem "ready" não há animação no CSS
      moveBar(current);
      bar.getBoundingClientRect();     // força o navegador a aplicar a posição agora
      bar.classList.add('ready');      // a partir daqui os movimentos são animados
    }

    // Define qual link é o "atual" (negrito + traço descansa nele)
    function setCurrent(link) {
      navLinks.forEach(function (l) { l.removeAttribute('aria-current'); });
      const isSection = link.getAttribute('href').charAt(0) === '#';
      link.setAttribute('aria-current', isSection ? 'location' : 'page');
      current = link;
      moveBar(current);
    }

    navLinks.forEach(function (link) {
      link.addEventListener('mouseenter', function () { moveBar(link); });
      link.addEventListener('focus',      function () { moveBar(link); });
      link.addEventListener('blur',       function () { moveBar(current); });

      link.addEventListener('click', function (e) {
        if (link.getAttribute('href').charAt(0) === '#') {
          setCurrent(link);                        // seção desta página: o traço fica nela
        } else if (link.pathname === location.pathname) {
          e.preventDefault();                      // link da própria página (Notícias): não recarrega,
          window.scrollTo({ top: 0, behavior: 'smooth' }); // volta ao topo
          setCurrent(link);
        }
        // links para outras páginas funcionam normalmente
      });
    });

    nav.addEventListener('mouseleave', function () { moveBar(current); });

    // Recalcula a posição quando a tela muda de tamanho ou a fonte termina de carregar
    snap();
    window.addEventListener('resize', snap);
    window.addEventListener('load', snap);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(snap);
  }
})();