---
title: NextJS
sidebar_position: 6
---

бертка над React, что-то типо GatsbyJS в плане билдинга. На выходе получается не чистый Virtual DOM, а смесь react и статичного html.

- NextJS Docs - [nextjs.org](https://nextjs.org/)
- NextJS Templates - [vercel.com/templates](https://vercel.com/templates)
- SSR нормальный, нет таких проблем как в CRA
- SEO frendly
- Встроенный роутинг

## Install with TypeScript (old):

```yarn create next-app --typescript```

## Install with TypeScript (new):

now ships with TypeScript by default.

```npx create-next-app@latest project-name```

### Install 1 old (create-next-app)

1. ```npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"```
2. ```cd nextjs-blog```
3. ```npm run dev```

### Install 2 old (manual)

1. ```npm init -y```
2. ```npm i --save react react-dom next```
3. ```./pages/index.js```
4. ```package.json```

---

## Pages

### Static pages

```tsx
// index.tsx
const Index = () => {
  return (
    <div>
      <h1>Hello, Nextjs!!!</h1>
    </div>
  );
}

export default Index;
```

#### _app page

```tsx
// _app.tsx - обертка
import '../styles/global-styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

#### 404 page

```tsx
// 404.tsx
export default function Error() {
  return (
    <h1>404 - Page not found</h1>
  )
}
```

### Dynamic pages

```pages/users/index.tsx``` - users list static page
```pages/users/[id].tsx``` - users detail dynamic page

---

### Link

```tsx
import Link from 'next/Link';

export default function LinkCustom({ text, href }) {
  return (
    <Link href={`/${href}`}>
      <a>{text}</a>
    </Link>
  );
}
```

---

## Styling

Styling
Inline styling

```tsx
const Index = () => {
  return (
    <div>
      <h1 className="title">Hello, Nextjs!!!</h1>
    </div>

    <style jsx>
      {`
        .title {
          color: maroon;
          background-color: white;
        }
      `}
    </style>
  );
}

export default Index;
```


Styling (_app.js)
Если в pages создать файл _app.js, то он будет оберткой для всего приложения. Можно подключать к нему глобальные стили.

```tsx
import '../styles/global-styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

Sass
npm i --save sass

```tsx
import Link from 'next/Link';

import styles from '../styles/LinkCustom.module.scss';

export default function LinkCustom({ text, href }) {
  return (
    <Link href={`/${href}`}>
      <a className={styles.LinkCustom}>{text}</a>
    </Link>
  );
}
```

Import module local styles

```tsx
import Link from 'next/Link';

import styles from '../styles/LinkCustom.module.css';

export default function LinkCustom({ text, href }) {
  return (
    <Link href={`/${href}`}>
      <a className={styles.LinkCustom}>{text}</a>
    </Link>
  );
}
```

---

## Routing

Routing
Static routing
pages/users/index.jsx || pages/users.jsx

```tsx
import Link from 'next/Link';

export default function staticRouting() {
  return (
    <>
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </>
  )
}
```


Dynamic routing
pages/users/index.jsx || pages/users/[id].jsx

```tsx
import Link from 'next/Link';

export default function staticRouting() {
  return (
    <Link href={`/users/${user.id}`}>
      <a>{user.name}</a>
    </Link>
  )
}
```

useRouter
// users/[id].js

```tsx
import { useRouter } from 'next/router';

export default function userId() {
  // const router = useRouter();
  const { query } = useRouter();
  const { id } = query;
  console.log('id', id);

  return (
    <div>
      <h1>User detail</h1>

      <div>{`User id: ${id}`}</div>
    </div>
  )
}
```

---

## SEO

```tsx
import Head from 'next/head';

<Head>
  <meta keywords="keyword1, keyword2, keyword3" />
  <title>NextJs - Test</title>
</Head>
MainContainer.js
import Head from 'next/head';
import LinkCustom from './LinkCustom';

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={keywords} />
        <title>NextJs - Test</title>
      </Head>

      <header>
        <ul className="navbar">
          <li>
            <LinkCustom text="Index" href="" />
          </li>
          <li>
            <LinkCustom text="Users" href="users" />
          </li>
        </ul>
      </header>

      <div>{children}</div>

      {/* inline styling */}
      <style jsx>
        {`
          .navbar {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
}
```

Use MainContainer

```tsx
// index.js
import MainContainer from '../components/MainContainer';

const Index = () => {
  return (
    <MainContainer keywords='index page'>
      <div>
        <h1 style={{ color: 'maroon' }}>Hello, Nextjs!!!</h1>
      </div>
    </MainContainer>
  )
}

export default Index;
```

Next SEO
npm install --save next-seo

```tsx
import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
    <p>Simple Usage</p>
  </>
);

export default Page;
```

---

## API

### Запросы для статичных страниц - getStaticProps

Не нужен useState или useEffect, все можно сделать через getStaticProps

```tsx
import Link from 'next/Link';

// static props
export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}

export default function users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2>Routing</h2>
      <ul>
        <li><Link href='/'><a>Index</a></Link></li>
      </ul>
    </div>
  )
}
```

### Запросы для динамических страниц - getServerSideProps

При запросах через getStaticProps или getServerSideProps данные, полученные с сервера уже отрендериваются на клиенте.

```tsx
// getServerSideProps - for dynamic pages
export async function getServerSideProps(context) {
  const { params, query } = context; // params, query можно забирать прямо из контекста этой функции
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const userData = await response.json();

  return {
    props: {userData}, // will be passed to the page component as props
  }
}

export default function userId({ userData }) {
  console.log('userData', userData);

  return (
    <div>
      <h1>User details:</h1>
      <ul>
        <li><span>Name:</span> <b>{userData.name}</b></li>
        <li><span>Phone:</span> <b>{userData.phone}</b></li>
        <li><span>Website:</span> <b>{userData.website}</b></li>
        <li><span>Id:</span> <b>{userData.id}</b></li>
      </ul>
    </div>
  )
}
```

---

## Express

Config for express server

```ts
// @ts-ignore
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req: any, res: any) => {
      return handle(req, res);
    });

    server.listen(3000, (err: any) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });
```

---
