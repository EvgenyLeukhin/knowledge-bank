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
          <h1 className="hero__title">{`My ${siteConfig.title}`}</h1>
          <p className="hero__subtitle">Находится в разработке и постоянно дополняется</p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/qa/basics/"
            >
              Начать читать
            </Link>
          </div>
          &nbsp;
        </div>
        {/* <HomepageFeatures /> */}

      </main>
    </Layout>
  );
}
