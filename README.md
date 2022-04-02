# Шаблон проекта с использованием Gulp, Less, Webpack

Шаблон для работы над проектом с использованием препроцессора Less и сборщика проектов Gulp.

Автор: [Михаил Баринов](https://github.com/barinovm/)

---

## Окружение и технологии

HTML-страницы собираются из отдельных частей с помощью плагина [gulp-file-include](https://www.npmjs.com/package/gulp-file-include).
Стили пишутся с использованием препроцессора [LESS](https://lesscss.org/),
обрабатываются [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
сжимаются и оптимизируются плагином [gulp-csso](https://www.npmjs.com/search?q=gulp-csso).
JS-файлы разбиты на модули, объединение и оптимизация происходит с помощью [WEBPACK](https://webpack.js.org/), через плагин [webpack-stream](https://www.npmjs.com/package/webpack-stream).
Изображения оптимизируются [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin),
растровые изображения дополнительно конвертируются в формат .webp с помощью [gulp-webp](https://www.npmjs.com/package/gulp-webp), SVG файлы название которых начинается с «icon-» - собираются [gulp-svgstore](https://www.npmjs.com/package/gulp-svgstore) в спрайт.
Браузерная совместимость описана в ключе browserlist в package.json, если коротко — «без IE11».
Так же проект можно автоматически конвертировать в .zip [gulp-zip](https://www.npmjs.com/package/gulp-zip) формат, преобразовать к единому стилю написания кода благодаря [prettier](https://prettier.io/) и проверить на стилевые и другие ошибки с помощью линтеров [stylelint](https://stylelint.io/) и [eslint](https://eslint.org/).
Последние 3 функции запускаются автоматически в момент создания [git](https://git-scm.com/book/ru/v2) [commit](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9) и останавливают процесс коммита при выявлении ошибок. Все это благодаря использованию [Git hooks](https://git-scm.com/book/ru/v2/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-Git-%D0%A5%D1%83%D0%BA%D0%B8-%D0%B2-Git) и инструмента [husky](https://typicode.github.io/husky/#/).

---

## Принцип верстки

**Mobile-first**

---

## Как использовать

`npm install` - установка зависимостей. (вкл. автоматическая инициализация git и установка husky)

`npm start` - сборка проекта в режиме разработки и запуск локального сервера.

`npm run build` - финальная сборка проекта.

`npm run zip` - финальная сборка проекта и упаковка его в zip-архив.

`npm test` - запуск теста на наличие стилистических ошибок.

---

## Структура проекта

```bash

├── .husky/                 # каталог настроек инструмента husky
├── dist/                   # каталог сборки проекта (cоздаётся автоматически)
├── gulpfile.js/            # каталог задач Gulp
├── src/                    # каталог для размещения исходных файлов проекта
│   ├── fonts/              # каталог шрифтов
│   ├── img/                # каталог растровых и векторных изображений
│   │   ├── favicons/       # каталог дополнительных фавиконок
│   │   └── svg/            # каталог векторных изображений для генерации векторного спрайта
│   ├── js/                 # каталог JS файлов
│   │   ├── modules/        # каталог отдельных модулей JS
│   │   └── index.js        # основной js файл
│   ├── less/               # каталог файлов стилей .less
│   │   ├── fonts.less      # файл подключения шрифтов
│   │   ├── mixins.less     # файл с less-миксинами
│   │   ├── style.less      # основной .less файл
│   │   └── variables.less  # файл с less-переменными
│   ├── parts/              # каталог модулей html (собирается плагином gulp-file-include)
│   │   └── head.html       # модуль html c содержимым тега <head> (для примера)
│   ├── favicon.svg         # основная фавиконка
│   └── index.html          # основной файл разметки страницы
├── .editorconfig           # файл конфигурации настроек редактора
├── .eslintrc               # файл конфигурации ESLint
├── .gitignore              # файл исключений Git
├── .prettierrc             # файл конфигурации Prettier
├── .stylelintrc.json       # файл конфигурации Stylelint
├── gulpfile.js             # основной файл конфигурации Gulp
├── package.json            # файл npm зависимостей и настроек проекта
├── package-lock.json       # lock-файл npm
├── README.md               # документация проекта
├── version.json            # файл с номером актуальной версии проекта (cоздаётся автоматически)

```
