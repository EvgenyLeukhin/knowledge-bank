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
          <h1 className="hero__title">Мой справочник-конспект знаний</h1>
          <p className="hero__subtitle">Находится в разработке и постоянно дополняется. Штудировать полезно!</p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/frontend/js-basics/script/"
            >
              Начать читать
            </Link>
          </div>
          <br />
          <a href="https://docusaurus.io/" target="_blank">Docusaurus guide</a>
        </div>
        {/* <HomepageFeatures /> */}

        <ul>
          <li>Фотография +++</li>
          <li>Звукозапись +++</li>
          <li>Видео +++</li>
          <li><b>Web-design</b> +++</li>
          <li><b>English</b> +++</li>
          <li><b>CSS</b> +++</li>
          <li><b>Начать JS, React</b> ---</li>
          <li><b>Nodejs, GraphQL</b> ---</li>
          <li><b>Сборки</b> ---</li>
        </ul>

      </main>
    </Layout>
  );
}
