const myProjects = [
  {
    title: 'Zodiac Calculator',
    tag: 'JS · Logic',
    description: 'Определение знака зодиака по дате рождения. Практика условий, дат и алгоритмов.',
    link: 'https://chrisredfield48.github.io/zodiac/'
  },
  {
    title: 'Birthday Search',
    tag: 'JS · Data',
    description: 'Поиск даты рождения жильцов дома по имени и фамилии. Вложенные объекты, перебор данных.',
    link: 'https://chrisredfield48.github.io/voda/'
  },
  {
    title: 'Проект Lexi',
    tag: 'HTML · CSS · JS',
    description: 'Верстка и логика проекта Lexi.',
    link: 'https://chrisredfield48.github.io/Lexi/'
  },
  {
    title: 'JS Repository',
    tag: 'GitHub',
    description: 'Репозиторий со всеми скриптами, алгоритмами и конспектами по JavaScript.',
    link: 'https://github.com/ChrisRedfield48/js/tree/main'
  },
  {
    title: 'Calculator',
    tag: 'В разработке',
    description: 'Калькулятор с базовыми арифметическими операциями. Практика событий и работы с DOM.',
    link: '#'
  },
  {
    title: 'Tic-Tac-Toe',
    tag: 'В разработке',
    description: 'Крестики-нолики. Игровая логика, определение победителя, работа с массивами.',
    link: '#'
  },
  {
    title: 'Quiz App',
    tag: 'В разработке',
    description: 'Викторина с вопросами и вариантами ответов. Счётчик очков, навигация между вопросами.',
    link: '#'
  },
  {
    title: 'Todo List',
    tag: 'В разработке',
    description: 'Список задач с добавлением и удалением. Практика работы с DOM и массивами.',
    link: '#'
  },
  {
    title: 'Weather App',
    tag: 'В разработке',
    description: 'Приложение погоды с выводом данных на сайт. Работа с API и fetch-запросами.',
    link: '#'
  }
];

const container = document.getElementById('projects-container');
document.getElementById('project-count').textContent = String(myProjects.length).padStart(2, '0');

myProjects.forEach((project, i) => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.style.animationDelay = `${i * 0.08}s`;
  card.innerHTML = `
    <div class="card-top">
      <span class="card-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="card-tag ${project.tag === 'В разработке' ? 'wip' : ''}">${project.tag}</span>
    </div>
    <h2 class="card-title">${project.title}</h2>
    <p class="card-desc">${project.description}</p>
    <a class="card-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
      Смотреть проект <span class="arrow">→</span>
    </a>
  `;
  container.appendChild(card);
});

const themeBtn = document.getElementById('theme-toggle');
const label = document.getElementById('theme-label');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  label.textContent = isLight ? 'Тёмная тема' : 'Светлая тема';
});