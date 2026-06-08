import React from 'react';
import Link from '@docusaurus/Link';

const NEWS_ITEMS = [
  {
    date: 'Coming soon',
    title: 'FreeBCI v1.0 Hardware Release',
    description:
      'The first production-ready FreeBCI board with 8-channel EEG, Bluetooth 5.0, and USB-C connectivity.',
    link: '/docs',
  },
  {
    date: 'Coming soon',
    title: 'Web-based Signal Viewer',
    description:
      'A new browser-based tool for real-time EEG visualization and analysis, no installation required.',
    link: '/docs',
  },
  {
    date: 'Coming soon',
    title: 'First Community Meetup',
    description:
      'Join the FreeBCI community for our first online meetup. Share projects, ask questions, and connect with fellow enthusiasts.',
    link: '/community',
  },
];

export default function NewsFeed() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-jakarta text-3xl font-bold">
          Latest Updates
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group rounded-lg border border-secondary-700 p-6 text-inherit transition-colors hover:border-primary hover:no-underline"
            >
              <span className="text-sm text-text-400">{item.date}</span>
              <h3 className="mt-2 mb-3 font-jakarta text-lg font-semibold group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
