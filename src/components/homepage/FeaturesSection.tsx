import React from 'react';
import Link from '@docusaurus/Link';

const FEATURES = [
  {
    title: 'Open Hardware',
    description:
      'Fully open-source hardware designs. Schematics, PCB layouts, and BOM are freely available for anyone to build, modify, and improve.',
    link: '/docs/hardware',
  },
  {
    title: 'Real-time Processing',
    description:
      'Process EEG signals in real time with low latency. Stream data wirelessly or via USB for immediate analysis and feedback.',
    link: '/docs/software',
  },
  {
    title: 'Multi-channel EEG',
    description:
      'Support for 8 to 16 channels of EEG data acquisition. Capture high-quality neural signals from multiple brain regions simultaneously.',
    link: '/docs/hardware',
  },
  {
    title: 'Open Software',
    description:
      'Complete software stack — firmware, drivers, GUI — all open source. Full customization and community contributions welcome.',
    link: '/docs/software',
  },
  {
    title: 'Extensible Platform',
    description:
      'Designed with expansion in mind. Add EMG, ECG, and other biosignal channels. Integrate with third-party sensors and actuators.',
    link: '/docs/hardware',
  },
  {
    title: 'Community Driven',
    description:
      'Built by a global community of researchers, engineers, and makers. Share projects, contribute code, and push BCI forward together.',
    link: '/community',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-secondary-800 px-4 py-16 dark:bg-secondary-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-jakarta text-3xl font-bold">
          Why FreeBCI?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group rounded-lg border border-transparent p-6 text-inherit transition-colors hover:border-primary hover:text-primary hover:no-underline"
            >
              <h3 className="mb-3 font-jakarta text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-400">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
