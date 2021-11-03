# Galaxy Pizza Frontend

[![Linters and Tests](https://github.com/HDNofc/galaxy-pizza-frontend/actions/workflows/main.yaml/badge.svg)](https://github.com/HDNofc/galaxy-pizza-frontend/actions/workflows/main.yaml)
[![codecov](https://codecov.io/gh/HDNofc/galaxy-pizza-frontend/branch/master/graph/badge.svg?token=F4P7ZQ8TI5)](https://codecov.io/gh/HDNofc/galaxy-pizza-frontend)

Это SPA-приложение, по заказу и доставке пиццы по солнечной системе.
Получение товаров из mongoDB, фильтрация по списку товаров, корзина, выбор планеты для доставки.

Для быстрого начала разработки использован [Create React App](https://github.com/facebook/create-react-app).

## Технологии

- TypeScript
- React
- Redux
- Styled Components
- React Testing Library

## Запуск приложения

### С использованием [Docker](https://www.docker.com/)

- `docker` и `docker-compose` должны быть установлены
- `npm i` - установка зависимостей
- `npm run docker:dev` - запуск dev-сервера

### Без использования Docker

- `npm i` - установка зависимостей
- `npm start` - запуск dev-сервера
- `npm test` - запуск unit-тестов

### Серверное API

Для полноценной локальной разработки необходима [серверная часть](https://github.com/HDNofc/galaxy-pizza-backend)

## Качество кода

### Eslint

- стандартный Eslint-конфиг Create React App

### Prettier

- форматирование кода

### Stylelint

- стандартный конфиг `stylelint-config-standard`
- сортировка правил `stylelint-config-rational-order`
- конфиг для Styled Components `stylelint-config-styled-components`

### Lint-staged и Husky

Содержимое каждого коммита проверяется на соответствие правилам Eslint, Stylelint и форматированию Prettier

## CI

Используется [Github Actions](https://github.com/HDNofc/galaxy-pizza-frontend/actions)

При пуше в ветку `master` выполняется:

- проверка на качество кода
- запуск unit-тестов
- отправка отчета на codecov

## Deploy

В качество площадки используется [Heroku](https://www.heroku.com/)
