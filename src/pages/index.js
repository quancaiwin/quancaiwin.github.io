import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}
      style={
        {
          backgroundImage: "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(" + require("@site/static/img/banner.png").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }
    >
      <div className="container">
        <img src={require('@site/static/img/icons.png').default} style={{
          width: "200px",
          marginBottom: "0.5rem"
        }} />
        <h1 className="hero__title" style={{ color: "#fff" }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ color: "#fff" }}> {siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Bắt đầu học cài Windows ngay!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
