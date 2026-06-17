import React from 'react';
import Layout from '@theme/Layout';
import HomeFooter from '../components/homepage/HomeFooter';

export default function AboutPage() {
  return (
    <Layout
      title="About FreeBCI"
      description="About The FreeBCI Project — Open Source Brain-Computer Interface."
      wrapperClassName="about-page bg-secondary-1000"
      noFooter
    >
      <section className="noise-bg px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 lg:text-6xl">
            About FreeBCI
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong className="text-zinc-900 dark:text-zinc-100">
                The FreeBCI Project
              </strong>{' '}
              is an open-source initiative dedicated to making brain-computer
              interface technology accessible, affordable, and transparent for
              everyone.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Our Mission
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              We believe that BCI technology should not be locked behind
              proprietary systems and expensive hardware. FreeBCI provides open
              hardware designs, open-source software, and comprehensive
              documentation to empower researchers, developers, and enthusiasts
              worldwide.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Backed By
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              FreeBCI is supported by{' '}
              <a
                href="https://www.bbci.net/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-100 underline"
              >
                BBCI
              </a>{' '}
              (Beijing Brain-Computer Interface Co., Ltd. / 北京脑机接口商业有限公司),
              whose commitment to open-source BCI development makes this project
              possible.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              What We Offer
            </h2>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Open Hardware
                </strong>{' '}
                — Schematics, PCB layouts, and design files for BCI devices
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Open Source Software
                </strong>{' '}
                — Signal processing, data acquisition, and analysis tools
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Documentation
                </strong>{' '}
                — Getting started guides, hardware specs, and software tutorials
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Community
                </strong>{' '}
                — Collaborate with researchers, engineers, and BCI enthusiasts
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Contribute
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              FreeBCI is built by the community, for the community. Whether you
              are a hardware engineer, software developer, researcher, or simply
              passionate about BCI, there are many ways to contribute. Check out
              our{' '}
              <a
                href="/docs/contributing"
                className="text-primary dark:text-primary-100 underline"
              >
                contributing guide
              </a>{' '}
              and join us on{' '}
              <a
                href="https://github.com/freebci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-100 underline"
              >
                GitHub
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              License
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              All FreeBCI hardware designs and software are released under open
              source licenses. See our{' '}
              <a
                href="https://github.com/freebci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-100 underline"
              >
                GitHub repositories
              </a>{' '}
              for specific license details.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Brand & Trademark
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              FreeBCI names, logos, and official branding assets are governed
              separately from open-source and open-hardware release terms. See
              the{' '}
              <a
                href="/trademark"
                className="text-primary dark:text-primary-100 underline"
              >
                Trademark Policy
              </a>{' '}
              for allowed descriptive use, prohibited use, and official brand
              identity guidance.
            </p>
          </div>
        </div>
      </section>

      <HomeFooter className="-mt-20 pt-32 pb-12" />
    </Layout>
  );
}
