import React from 'react';
import Link from '@docusaurus/Link';
import { GitHub } from 'react-feather';

export default function CommunitySection() {
  return (
    <section className="bg-secondary-800 px-4 py-16 dark:bg-secondary-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 font-jakarta text-3xl font-bold">
          Join The FreeBCI Project
        </h2>
        <p className="mb-10 text-text-400">
          FreeBCI is built by a global community. Whether you're a researcher,
          developer, or maker — there's a place for you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/freebci"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 hover:text-white hover:no-underline"
          >
            <GitHub className="h-5 w-5" />
            GitHub
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-secondary-700 px-6 py-3 font-semibold text-inherit transition-colors hover:border-primary hover:text-primary hover:no-underline"
          >
            Documentation &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
