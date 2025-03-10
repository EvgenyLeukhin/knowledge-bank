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
              to="/docs/managment/communication/"
            >
              Начать читать
            </Link>
          </div>
          {/* <a href="https://docusaurus.io/" target="_blank">Docusaurus guide</a> */}
          <br />

          <div style={{ textAlign: 'left' }}>
              - <b>MOBILE</b>: React Native, Expo, ReactQuery, Async Storage, Tailwind (позволяет кастомизировать стили комронентов) <br />
              - <b>BACKEND</b>: Nodejs, Express, Nest.js, Prisma, Loopback ???, MongoDB, PostgreSQL<br />
              - <b>DESKTOP</b>: Electron app, PWA<br />
          </div>
        </div>
        {/* <HomepageFeatures /> */}

        <hr />

        {/* https://www.mindmeister.com/app/map/3644672321?source=template */}
        <p  style={{ textAlign: 'center' }}>
          <a
            href="https://www.mindmeister.com/app/map/3644672321?source=template"
            target='_blank'
          >
            Mind map - Mindmeister
          </a>
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          {/* LEARN */}
          <div style={{ padding: 20, marginRight: 20 }}>
            <h2>HARD-SKILLS (RELOAD)</h2>
            <ol>
              <li style={{ color: 'lightgreen'}}>JS - basics</li>
              <li style={{ color: 'lightgreen'}}>JS - progressive</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux + RTK-Query</li>
              <li style={{ color: 'deeppink'}}>React Native</li>
              <li style={{ color: 'deeppink'}}>nodejs</li>
            </ol> 
          </div>

          {/* PRACTICE */}
          <div  style={{ padding: 20, marginRight: 20 }}>
            <h2>PRACTICE</h2>

            <ol>
              <li style={{ color: 'lightgreen'}}>CODEWARS --&gt;</li>
              <li style={{ color: 'lightgreen'}}>Emails --&gt;</li>
              <li style={{ color: 'lightgreen'}}>Websites and landing pages (old-school) --&gt;</li>
              <li style={{ color: 'lightgreen'}}>Websites and landing pages (Gatsby, NextJS) --&gt;</li>
              <li>Websites by CMS</li>
              <li style={{ color: 'lightgreen'}}>React apps. --&gt;</li>
              <li>React StoryBook with custom components</li>
              <li style={{ color: 'deeppink'}}>Mobile app.</li>
              <li style={{ color: 'deeppink'}}>Backend app.</li>
            </ol> 
          </div>

          {/* PET-PROJECTS */}
          <div  style={{ padding: 20, marginRight: 20 }}>
            <h2>PET-PROJECTS</h2>

            <ol>
              <li>Personal website with CV and portfolio</li>
              <li>Randomizer</li>
              <li>Retina-test 2.0</li>
              <li>Gift-boxes</li>
              <li>Antistress-animation</li>
              <li>Гимнастика для глаз</li>
            </ol> 
          </div>

          {/* SOFT-SKILLS */}
          <div style={{ padding: 20, marginRight: 20 }}>
            <h2>SOFT-SKILLS</h2>
            <ol>
              <li>English</li>
              <li>Коммуникация</li>
              <li>Демо, публичные выступления</li>
              <li>Психология</li>
              <li>Саморазвитие</li>
            </ol> 
          </div>
        </div>  
      </main>
    </Layout>
  );
}
