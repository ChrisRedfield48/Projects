(() => {
  'use strict';

  const PROJECTS = [
    { name:'Zodiac Calculator', tag:'JS · Logic', info:'Знак зодиака по дате рождения. Условия, даты, алгоритмы.', open:'https://chrisredfield48.github.io/zodiac/' },
    { name:'Birthday Search', tag:'JS · Data', info:'Поиск дня рождения жильца по имени. Вложенные объекты.', open:'https://chrisredfield48.github.io/voda/' },
    { name:'Проект Lexi', tag:'HTML · CSS · JS', info:'Лендинг Lexi: вёрстка и интерактив.', open:'https://chrisredfield48.github.io/Lexi/' },
    { name:'JS Repository', tag:'GitHub', info:'Все скрипты, алгоритмы и конспекты по JavaScript.', open:'https://github.com/ChrisRedfield48/js/tree/main' },
    { name:'Calculator', tag:'JS · DOM', info:'Калькулятор: события и работа с DOM.', open:'https://github.com/ChrisRedfield48/Calculator' },
    { name:'Tic-Tac-Toe', tag:'JS · Logic', info:'Крестики-нолики: игровая логика, поиск победителя.', open:'https://github.com/ChrisRedfield48/Tic-Tac-Toe' },
    { name:'Quiz App', tag:'JS · DOM', info:'Викторина: счёт очков, навигация по вопросам.', open:null, wip:true },
    { name:'Todo List', tag:'JS · DOM', info:'Список задач: добавление, удаление, работа с DOM.', open:null, wip:true },
    { name:'Weather App', tag:'JS · API', info:'Погода через fetch-запросы к API.', open:null, wip:true }
  ];
  const LIVE = PROJECTS.filter(p => !p.wip).length;
  const WIP = PROJECTS.length - LIVE;

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  const T = {
    kw:  s => `<span class="t-kw">${esc(s)}</span>`,
    key: s => `<span class="t-key">${esc(s)}</span>`,
    str: s => `<span class="t-str">'${esc(s)}'</span>`,
    link:s => `<span class="t-link">'${esc(s)}'</span>`,
    num: s => `<span class="t-num">${esc(String(s))}</span>`,
    pun: s => `<span class="t-pun">${esc(s)}</span>`,
    com: s => `<span class="t-com">${esc(s)}</span>`,
    vr:  s => `<span class="t-var">${esc(s)}</span>`
  };
  const L = h => `<div class="code-line"><span class="lc">${h}</span></div>`;
  const B = () => L('');
  const cursor = () => `<div class="code-line"><span class="lc"><span class="cursor"></span></span></div>`;
  const arr = items => T.pun('[') + items.map(s => T.str(s)).join(T.pun(', ')) + T.pun(']');

  function projBlock(p){
    const clickable = !!p.open;
    const cls = 'proj' + (p.wip ? ' wip' : '') + (clickable ? '' : ' nolink');
    const openTag = clickable
      ? `<a class="${cls}" href="${esc(p.open)}" target="_blank" rel="noopener noreferrer">`
      : `<div class="${cls}">`;
    const closeTag = clickable ? '</a>' : '</div>';
    const cmt = clickable ? (p.wip ? '// в разработке ↗' : '// открыть ↗') : '// в разработке';
    const openLine = clickable
      ? L('    ' + T.key('open') + T.pun(': ') + T.link(p.open) + T.pun(',') + '  ' + T.com(cmt))
      : L('    ' + T.key('open') + T.pun(': ') + T.kw('null') + T.pun(',') + '  ' + T.com(cmt));
    return openTag
      + L('  ' + T.pun('{'))
      + L('    ' + T.key('name') + T.pun(': ') + T.str(p.name) + T.pun(','))
      + L('    ' + T.key('tag') + T.pun(': ') + T.str(p.tag) + T.pun(','))
      + L('    ' + T.key('info') + T.pun(': ') + T.str(p.info) + T.pun(','))
      + openLine
      + L('  ' + T.pun('},'))
      + closeTag;
  }

  function renderProjects(){
    let o = '';
    o += L(T.com('// портфолио как исходный код'));
    o += L(T.com('// в проде: ' + LIVE + ' · в разработке: ' + WIP));
    o += B();
    o += L(T.kw('const') + ' ' + T.vr('projects') + ' ' + T.pun('=') + ' ' + T.pun('['));
    PROJECTS.forEach(p => { o += projBlock(p); });
    o += L(T.pun(']'));
    o += B();
    o += L(T.kw('export') + ' ' + T.kw('default') + ' ' + T.vr('projects'));
    o += cursor();
    return `<div class="code">${o}</div>`;
  }

  function renderAbout(){
    let o = '';
    o += L(T.com('// кто пишет этот код'));
    o += B();
    o += L(T.kw('const') + ' ' + T.vr('dev') + ' ' + T.pun('=') + ' ' + T.pun('{'));
    o += L('  ' + T.key('name') + T.pun(': ') + T.str('Chris') + T.pun(','));
    o += L('  ' + T.key('alias') + T.pun(': ') + T.str('ChrisRedfield48') + T.pun(','));
    o += L('  ' + T.key('age') + T.pun(': ') + T.num(18) + T.pun(','));
    o += L('  ' + T.key('stack') + T.pun(': ') + arr(['JavaScript','HTML','CSS']) + T.pun(','));
    o += L('  ' + T.key('learning') + T.pun(': ') + T.str('JavaScript вглубь') + T.pun(','));
    o += L('  ' + T.key('next') + T.pun(': ') + arr(['Python','нейросети']) + T.pun(','));
    o += L('  ' + T.key('dream') + T.pun(': ') + T.str('Россия → Белград') + T.pun(','));
    o += L('  ' + T.key('status') + T.pun(': ') + T.str('open to work') + T.pun(','));
    o += L(T.pun('}'));
    o += B();
    o += L(T.kw('export') + ' ' + T.kw('default') + ' ' + T.vr('dev'));
    o += cursor();
    return `<div class="code">${o}</div>`;
  }

  function linkVal(u){
    return `<a class="t-link inline-link" href="${esc(u)}" target="_blank" rel="noopener noreferrer">'${esc(u)}'</a>`;
  }
  function renderContact(){
    let o = '';
    o += L(T.com('// связь — пиши, отвечаю'));
    o += B();
    o += L(T.kw('const') + ' ' + T.vr('contact') + ' ' + T.pun('=') + ' ' + T.pun('{'));
    o += L('  ' + T.key('telegram') + T.pun(': ') + linkVal('https://t.me/ChrisRedfield49') + T.pun(','));
    o += L('  ' + T.key('github') + T.pun(': ') + linkVal('https://github.com/ChrisRedfield48') + T.pun(','));
    o += L(T.pun('}'));
    o += B();
    o += L(T.com('// ↑ кликни по ссылке'));
    o += cursor();
    return `<div class="code">${o}</div>`;
  }

  const FILES = {
    projects: { render:renderProjects, info:LIVE + ' live · ' + WIP + ' wip', name:'projects.js' },
    about:    { render:renderAbout,    info:'dev profile',    name:'about.js' },
    contact:  { render:renderContact,  info:'2 channels',     name:'contact.js' }
  };

  const editor  = document.getElementById('editor');
  const winfile = document.getElementById('winfile');
  const stInfo  = document.getElementById('st-info');
  const stLn    = document.getElementById('st-ln');
  let lineEls = [];

  function setLn(ln, col){ stLn.textContent = `Ln ${ln}, Col ${col}`; }

  function setFile(name){
    const f = FILES[name]; if (!f) return;
    editor.innerHTML = f.render();
    winfile.textContent = f.name;
    stInfo.textContent = f.info;
    document.querySelectorAll('[data-file]').forEach(el => el.classList.toggle('active', el.dataset.file === name));
    lineEls = Array.from(editor.querySelectorAll('.code-line'));
    editor.scrollTop = 0;
    setLn(1, 1);
  }

  document.querySelectorAll('[data-file]').forEach(el => {
    el.addEventListener('click', () => setFile(el.dataset.file));
  });

  editor.addEventListener('mousemove', e => {
    const line = e.target.closest('.code-line'); if (!line) return;
    const idx = lineEls.indexOf(line); if (idx < 0) return;
    setLn(idx + 1, 1);
  }, { passive:true });

  const TKEY = 'nip.projects.theme';
  const themeBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  function applyTheme(light){ document.body.classList.toggle('light', light); themeLabel.textContent = light ? 'dark' : 'light'; }
  let light = false;
  try { light = localStorage.getItem(TKEY) === 'light'; } catch (e) {}
  applyTheme(light);
  themeBtn.addEventListener('click', () => {
    const next = !document.body.classList.contains('light');
    applyTheme(next);
    try { localStorage.setItem(TKEY, next ? 'light' : 'dark'); } catch (e) {}
  });

  setFile('projects');
})();