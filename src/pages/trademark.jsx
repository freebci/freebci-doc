import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomeFooter from '../components/homepage/HomeFooter';

function MarkCard({ src, alt, title, description }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <img
        src={src}
        alt={alt}
        className="mb-3 h-20 w-auto rounded-lg border border-zinc-100 bg-zinc-50 object-contain p-2 dark:border-zinc-800 dark:bg-zinc-900"
      />
      <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {description}
      </p>
      <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Shown for identification only. Use is restricted by this trademark
        policy.
      </p>
    </article>
  );
}

export default function TrademarkPage() {
  return (
    <Layout
      title="Trademark Policy"
      description="FreeBCI trademark and brand use guidance"
      wrapperClassName="about-page bg-secondary-1000"
      noFooter
    >
      <section className="noise-bg px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-4xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 lg:text-6xl">
            Trademark & Brand Use
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong className="text-zinc-900 dark:text-zinc-100">
                FreeBCI names, logos, and official branding assets
              </strong>{' '}
              are governed separately from open-source and open-hardware release
              terms.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Open-source software licenses and open hardware release terms may
              allow code or design-file use, but they do not grant trademark
              rights, official branding rights, or endorsement rights.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Covered Marks
            </h2>
          </div>

          <div className="mb-10 mt-6 grid gap-4 sm:grid-cols-2">
            <MarkCard
              src="/logo/light.png"
              alt="FreeBCI-FM symbol mark"
              title="FreeBCI-FM"
              description="Global FreeBCI symbol mark used for project identification and official communication."
            />
            <MarkCard
              src="/logo/cm-hero.png"
              alt="FreeBCI-CM English composite mark"
              title="FreeBCI-CM"
              description="English composite mark used in official FreeBCI brand communication."
            />
            <MarkCard
              src="/logo/cm-zh.jpg"
              alt="FreeBCI-CM-zh Chinese composite mark"
              title="FreeBCI-CM-zh"
              description="Chinese composite mark used for mainland China communication."
            />
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Trademark & Brand Use
            </h2>
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Purpose
            </h3>
            <p>
              This page explains how FreeBCI brand assets, names, and official
              identity may and may not be used.
            </p>
            <p>It applies to:</p>
            <ul>
              <li>project names</li>
              <li>product-series names used as source identifiers</li>
              <li>logos and symbol marks</li>
              <li>composite marks</li>
              <li>official hardware identity claims</li>
              <li>packaging, listing, and marketing references</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              License Boundary
            </h3>
            <p>
              No trademark rights are granted under FreeBCI software licenses or
              hardware release terms.
            </p>
            <p>This includes:</p>
            <ul>
              <li>
                the right to use FreeBCI or related marks as your own product
                identity
              </li>
              <li>the right to place official marks on derived hardware</li>
              <li>
                the right to imply endorsement, approval, certification, or
                official origin
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Allowed Descriptive Use
            </h3>
            <p>
              Where legally permitted, factual descriptive references are
              generally acceptable, such as:
            </p>
            <ul>
              <li>
                <code>based on the FreeBCI Spike open hardware release</code>
              </li>
              <li>
                <code>compatible with FreeBCI DAQ</code>
              </li>
              <li>
                <code>
                  derived from published FreeBCI hardware release files
                </code>
              </li>
            </ul>
            <p>These references must remain descriptive and must not imply:</p>
            <ul>
              <li>partnership</li>
              <li>authorization</li>
              <li>certification</li>
              <li>official manufacturing origin</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Prohibited Use
            </h3>
            <p>Without separate permission, third parties should not:</p>
            <ul>
              <li>
                use <code>FreeBCI</code>, <code>BBCI</code>, or related marks
                as a company name, product name, store name, domain name, or
                social account name
              </li>
              <li>
                place official brand marks on derived hardware in a way that
                suggests official manufacture
              </li>
              <li>
                use FreeBCI marks on packaging, listings, ads, or exhibition
                materials to imply endorsement
              </li>
              <li>
                claim that a derived product is official, certified, approved,
                or manufactured by the FreeBCI project owner
              </li>
              <li>
                reuse authenticity, support, or quality-control style labels
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Official Hardware Identity
            </h3>
            <p>
              Official hardware identity should be established through the
              shipped product, packaging, traceability, and support channel, not
              only by public design files.
            </p>
            <p>
              Public release files alone do not make a derived product
              &quot;official FreeBCI hardware&quot;.
            </p>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Brand Assets
            </h3>
            <p>
              Brand assets used on this site and in project repositories are for
              official identification and communication.
            </p>
            <p>
              They are not published here as a general-purpose download pack or
              free-use asset set.
            </p>
            <p>
              If you need authorized brand use, manufacturing guidance, or
              official co-branding approval, request permission through the
              project&apos;s official contact channel before use.
            </p>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Jurisdiction Note
            </h3>
            <p>
              Trademark treatment is jurisdiction-specific. Registration status,
              cleared usage, and enforcement scope may vary by region.
            </p>
            <p>
              Mainland China communication and commercial use should follow the
              marks that are actually cleared and appropriate for that
              jurisdiction.
            </p>

            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              Related Pages
            </h3>
            <ul>
              <li>
                <Link to="/about">About FreeBCI</Link>
              </li>
              <li>
                <Link to="/docs/hardware">Hardware Docs</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <HomeFooter className="-mt-20 pt-32 pb-12" />
    </Layout>
  );
}
