---
title: Бандлеры и сборки
sidebar_position: 3
---

## Для React

- [NextJS](https://nextjs.org/) - web-framework for React (---Best choice!---)
- [create-react-app](https://create-react-app.dev/) - bundler for React
- [Gatsby](https://www.gatsbyjs.com/) - static html-page generator with React
- [Astro](https://astro.build/) - static html-page generator
- [Remix](https://remix.run/) - web-framework
- [Fresh](https://fresh.deno.dev/) - web-framework for React

---

## NextJS

Инициализация проекта:

```bash
mkdir nextjs

npx create-next-app@latest .

? Would you like to use TypeScript with this project? › No / Yes

? Would you like to use ESLint with this project? › No / Yes

? Would you like to use experimental `app/` directory with this project?

? Would you like to use `src/` directory with this project? › No / Yes

? What import alias would you like configured? › @/*
```

### Declare file types

```ts title="react-app-env.d.ts, next-env.d.ts"
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.scss';
```

---

## Tusk runners

- [Webpack](https://webpack.js.org/)
- [Parcel](https://parceljs.org/)
- [vite](https://vitejs.dev/)
- [gulp](https://gulpjs.com/)
- [grunt](https://gruntjs.com/)
