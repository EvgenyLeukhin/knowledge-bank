import React from 'react';
// import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <div className="container" style={{ textAlign: 'center' }}>
          &nbsp;
          <h2 className="hero__title">Мой справочник-конспект знаний</h2>

          <hr />

          {/* <p className="hero__subtitle">Находится в разработке и постоянно дополняется. Штудировать полезно!</p> */}

          <p className="hero__subtitle">
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li><b>ПРАКТИЧЕСКИЕ</b><br /> (фреймворк, работа с API данными, стейтом, код) - MOST WANTED!!!</li>
                <li>↑</li>
                <li><b>ИНСТРУМЕНТАЛЬНЫЕ</b><br /> (редактор, браузер, программы, сервисы)</li>
                <li>↑</li>
                <li><b>ФУНДАМЕНТАЛЬНЫЕ</b><br /> (справочные, теория HTML/CSS/JS)</li>
              </ul>
          </p>

          <hr />

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/frontend/react/react/"
            >
              Начать читать
            </Link>
          </div>
          {/* <a href="https://docusaurus.io/" target="_blank">Docusaurus guide</a> */}
        <br />
        На будущее: React Native, Backend on Nodejs, Desktop express app, PWA, Swelte
        </div>
        {/* <HomepageFeatures /> */}

        <hr />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>TODO list:</h2>

          <ul>
              <li>try-catch вне асинхронных функций</li>
              <li><strike>setInterval, setTimeout</strike></li>
              <li><strike>Фильтрация через query params</strike></li>
              <li>new Map(), new Set()</li>
              <li><strike>enum как поле объекта</strike></li>
              <li>Дженерик в TypeScript</li>
              <li><strike>Расширение props компонента, надстройка над библиотечным компонентом</strike></li>
              <li>TypeGuard (as - для параметра), (is - для возврата)</li>
              <li>Технологии: ERP, Kafka, RabbitMQ, Amazon S3, Микрофронтенд - single-spa, BFF, Монолит --&gt; Микросервис, svelte, Flux</li>
          </ul> 
        </div>  
      </main>
    </Layout>
  );
}
