import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import cn from 'clsx';
import styles from './index.module.css';

const links = [
  { href: '/docs/category/-design/', label: 'Design', isChecked: true },
  { href: '/docs/category/html-/', label: 'HTML', isChecked: true },
  { href: '/docs/category/css--/', label: 'CSS', isChecked: true },
  {
    href: '/docs/frontend/js/language/about/',
    label: 'JavaScript',
    isChecked: false,
    inProgress: true,
  },
  {
    href: '/docs/frontend/ts/archive/typing/',
    label: 'TypeScript',
    isChecked: false,
    inProgress: false,
  },
  {
    href: '/docs/category/react---ts/',
    label: 'React',
    isChecked: false,
    inProgress: false,
  },
  { href: '/docs/backend/nodejs/basics/', label: 'NodeJS', isChecked: false },
  {
    href: '/docs/category/react-native/',
    label: 'React Native',
    isChecked: false,
  },
];

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <main>
        <div className='container' style={{ textAlign: 'center' }}>
          &nbsp;
          <h2 className='hero__title'>Knowledge bank</h2>
          <ul className={styles.list}>
            {links.map(({ href, label, isChecked, inProgress }) => (
              <li
                className={cn({
                  [styles.isChecked]: isChecked,
                  [styles.inProgress]: inProgress,
                })}
              >
                <Link key={label} to={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.buttons}>
            <Link
              className='button button--primary button--lg'
              to='/docs/category/-frontend/'
            >
              Начать читать
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
