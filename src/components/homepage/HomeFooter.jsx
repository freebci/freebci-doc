import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

export default function HomeFooter() {
  return (
    <footer className="bg-[#191919] text-white dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:justify-between">
        <div className="max-w-xs">
          <ThemedImage
            alt="FreeBCI"
            className="mb-4 h-8"
            sources={{
              light: '/logo/light.png',
              dark: '/logo/dark.png',
            }}
          />
          <p className="text-sm text-zinc-400">
            Open source brain-computer interfaces, for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">Docs</h4>
            <div className="flex flex-col gap-2">
              <Link to="/docs" className="text-sm text-zinc-400 hover:text-white hover:no-underline">
                Getting Started
              </Link>
              <Link to="/docs/hardware" className="text-sm text-zinc-400 hover:text-white hover:no-underline">
                Hardware
              </Link>
              <Link to="/docs/software" className="text-sm text-zinc-400 hover:text-white hover:no-underline">
                Software
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">
              Community
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="https://github.com/freebci"
                className="text-sm text-zinc-400 hover:text-white hover:no-underline"
              >
                GitHub
              </Link>
              <Link to="/community" className="text-sm text-zinc-400 hover:text-white hover:no-underline">
                Community
              </Link>
              <Link to="/docs/contributing" className="text-sm text-zinc-400 hover:text-white hover:no-underline">
                Contributing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-zinc-300">More</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/about"
                className="text-sm text-zinc-400 hover:text-white hover:no-underline"
              >
                About
              </Link>
              <Link to="/privacy" className="text-sm text-zinc-400 hover:text-white hover:no-underline">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-6 py-6 text-center">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} The FreeBCI Project. All rights reserved.{' '}
          Supported by{' '}
          <a
            href="https://www.bbci.net/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-100 hover:underline"
          >
            BBCI
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
