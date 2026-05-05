```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ◆  N I P . S Y S  ·  P R O J E C T S  H U B  ◆         │
│                                                             │
│   chrisredfield48.github.io/projects                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

---

## О проекте

Витрина JavaScript-проектов в стиле NIP.SYS. Карточки генерируются динамически из массива — добавить новый проект значит дописать один объект. Есть переключатель тёмной / светлой темы.

---

## Структура

```
projects-hub/
├── index.html      ← разметка страницы
├── style.css       ← стили, CSS-переменные, анимации
└── js.js           ← массив проектов + рендер карточек
```

---

## Как устроено

**Данные** — массив `myProjects`, каждый элемент:

```js
{
  title:       'Calculator',
  tag:         'JS · DOM',
  description: 'Калькулятор с базовыми операциями.',
  link:        'https://chrisredfield48.github.io/Calculator/'
}
```

**Рендер** — `forEach` создаёт `div.project-card` и вставляет в грид.
`animationDelay` на каждую карточку даёт эффект последовательного появления.

**Тема** — клик по кнопке переключает класс `light-theme` на `<body>`.
Все цвета живут в CSS-переменных, переключение мгновенное.

---

## Дизайн

```
Фон          #0a0a08    ░░ почти чёрный
Акцент       #E8D84A    ▓▓ золото
Заголовки    Playfair Display  (serif, italic)
Интерфейс    DM Mono           (monospace)
```

Анимации: `fadeUp` на карточках · `logoPulse` на логотипе · `shimmer` на разделителе · курсор `▮` мигает в заголовке.

---

## Проекты

```
 01  Zodiac Calculator    JS · Logic        ✦ live
 02  Birthday Search      JS · Data         ✦ live
 03  Проект Lexi          HTML · CSS · JS   ✦ live
 04  JS Repository        GitHub            ✦ live
 05  Calculator           JS · DOM          ✦ live
 ──
 06  Tic-Tac-Toe          JS · Logic        ○ wip
 07  Quiz App             JS · DOM          ○ wip
 08  Todo List            JS · DOM          ○ wip
 09  Weather App          JS · API          ○ wip
```

---

```
© 2026  NIP.SYS · CHRIS · RUSSIA → BELGRADE
```