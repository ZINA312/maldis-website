# Сайт компании «Малдис»

Информационный сайт для компании, занимающейся арендой холодильных/морозильных складов и логистическими услугами.

**Бесплатный хостинг:** GitHub Pages (0 ₽/мес).

## Быстрый старт

```bash
npm install
npm run dev      # локальный просмотр: http://localhost:4321/
npm run build    # сборка в папку dist/
```

## Как редактировать контент

Все данные хранятся в файлах — просто отредактируйте и запушьте в GitHub:

| Что изменить | Файл |
|---|---|
| Склады, камеры, фото | `src/data/warehouses.ts` |
| Услуги | `src/data/services.ts` |
| Клиенты (логотипы) | `src/data/clients.ts` + `public/images/clients/` |
| О компании, статистика | `src/data/company.ts` |
| Контакты, адрес, карта, маршруты | `src/data/contacts.ts` |
| Фотографии складов | `public/images/` |

### Фотографии (карусель)

1. Положите файлы в `public/images/` (например `warehouse-1-2.jpg`)
2. Добавьте пути в массив `images` в `src/data/warehouses.ts`:

```ts
images: [
  '/images/warehouse-1.jpg',
  '/images/warehouse-1-2.jpg',
  '/images/warehouse-1-3.jpg',
],
```

Если фото одно — карусель показывает только его, без стрелок.

### Логотипы клиентов

1. Положите файлы в `public/images/clients/` (PNG/SVG/JPG)
2. Отредактируйте `src/data/clients.ts`:

```ts
export const clients = [
  { name: 'Название компании', logo: '/images/clients/company.png' },
  { name: 'Другая компания', logo: '/images/clients/other.svg', url: 'https://example.com' },
];
```

Секция «Наши клиенты» — бесконечная карусель; при наведении останавливается.

### Карты

В `src/data/contacts.ts` замените `directions.car.mapEmbedUrl` и `directions.truck.mapEmbedUrl` на ссылки из [Яндекс.Карт](https://yandex.ru/map-constructor/) — отдельно для легкового и грузового въезда.

### Маршруты

В том же файле `contacts.ts` отредактируйте блоки `directions.car` и `directions.truck`.

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub (например, `maldis-website`)
2. Запушьте код:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/maldis-website.git
   git push -u origin main
   ```
3. В настройках репозитория: **Settings → Pages → Source: GitHub Actions**
4. После пуша в `main` сайт автоматически соберётся и опубликуется

Сайт будет доступен по адресу: `https://YOUR_USERNAME.github.io/maldis-website/`

> Если репозиторий называется `YOUR_USERNAME.github.io` (пользовательский сайт), измените `base` в `astro.config.mjs` на `'/'`.

## Структура проекта

```
src/
  data/          ← все данные сайта (редактируйте здесь)
  components/    ← блоки страницы
  pages/         ← страницы
  layouts/       ← общий шаблон
public/
  images/        ← фотографии
```
