import React from 'react';
import Link from '@docusaurus/Link';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <div className="mb-8">
        <img
          src="/logo/cm-hero.png"
          alt="FreeBCI"
          className="h-44 md:h-64"
        />
      </div>

      <h1 className="mb-6 text-center font-jakarta text-4xl font-bold leading-tight md:text-5xl">
        An Open Source
        <br />
        Brain-Computer Interface
      </h1>

      <p className="mb-10 max-w-2xl text-center text-lg text-text-400">
        Both hardware and software — fully open source. Built by a global community
        of researchers, engineers, and makers.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/docs"
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 hover:text-white hover:no-underline"
        >
          Get Started
        </Link>
        <Link
          href="https://github.com/freebci"
          className="rounded-lg border border-secondary-700 px-6 py-3 font-semibold text-inherit transition-colors hover:border-primary hover:text-primary hover:no-underline"
        >
          GitHub &rarr;
        </Link>
      </div>
    </section>
  );
}
