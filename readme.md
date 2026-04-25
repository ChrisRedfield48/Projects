<div align="center">

# ◆ NIP.SYS · Projects

**Витрина JavaScript-проектов**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

---

## 📖 О проекте

Страница-витрина с карточками всех JS-проектов. Карточки генерируются динамически из массива данных. Есть переключатель тёмной и светлой темы.

---

## 📁 Структура проекта

```
projects-site/
├── index.html   ← разметка страницы
├── js.js        ← данные проектов и логика
└── style.css    ← стили (тёмная тема, анимации)
```

---

## 🚀 Запуск

Никаких зависимостей. Просто открой `index.html` в браузере.

---

## ⚙️ Как работает

### Данные — массив `myProjects`

Каждый проект — объект с четырьмя полями:

```js
{
  title:       'Zodiac Calculator',
  tag:         'JS · Logic',
  description: 'Определение знака зодиака по дате рождения.',
  link:        'https://chrisredfield48.github.io/zodiac/'
}
```

### Рендер карточек

Массив перебирается через `forEach` — для каждого проекта создаётся `div.project-card` и вставляется в грид через `appendChild`:

```js
myProjects.forEach((project, i) => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.style.animationDelay = `${i * 0.08}s`;
  card.innerHTML = `...`;
  container.appendChild(card);
});
```

Задержка `animationDelay` создаёт эффект последовательного появления карточек.

### Переключатель темы

Клик по кнопке toggleит класс `light-theme` на `<body>`. Все цвета переключаются через CSS-переменные:

```js
document.body.classList.toggle('light-theme');
```

---

## 🎨 Дизайн

В стиле NIP.SYS:

| Элемент | Значение |
|---------|----------|
| Фон | `#0a0a08` |
| Акцент | `#E8D84A` (золото) |
| Шрифт заголовков | `Playfair Display` |
| Шрифт интерфейса | `DM Mono` |

**Анимации:**
- Карточки появляются снизу с задержкой (`fadeUp`)
- Логотип пульсирует с золотым свечением
- Разделитель в шапке плавно расширяется (`shimmer`)
- Курсор `▮` мигает после заголовка

---

## 🗂️ Проекты на витрине

| # | Проект | Тег | Статус |
|---|--------|-----|--------|
| 01 | Zodiac Calculator | JS · Logic | ✅ Готов |
| 02 | Birthday Search | JS · Data | ✅ Готов |
| 03 | Проект Lexi | HTML · CSS · JS | ✅ Готов |
| 04 | JS Repository | GitHub | ✅ Готов |
| 05 | Calculator | JS · DOM | 🔧 В разработке |
| 06 | Tic-Tac-Toe | JS · Logic | 🔧 В разработке |
| 07 | Quiz App | JS · DOM | 🔧 В разработке |
| 08 | Todo List | JS · DOM | 🔧 В разработке |
| 09 | Weather App | JS · API | 🔧 В разработке |

---

<div align="center">

```
© 2026 NIP.SYS · CHRIS · RUSSIA → BELGRADE
```

</div>