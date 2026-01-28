import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import VersionSelect from '@site/src/components/VersionSelect';

import styles from './index.module.css';
import BannerImage from "@site/src/components/BannerImage";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <BannerImage />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Official Wiki for GeckoLib - The Minecraft mod for animation, rendering, and more.">
      <HomepageHeader />
      <main>
        <VersionSelect />
      </main>
    </Layout>
  );
}
