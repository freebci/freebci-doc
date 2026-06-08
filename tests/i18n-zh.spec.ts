import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test('ZH docs root should render Chinese after hydration', async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  page.on('pageerror', err => {
    pageErrors.push(err.message);
  });

  await page.goto(`${BASE_URL}/zh/docs/freebci-daq/`, {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForSelector('#__docusaurus', { timeout: 10000 });

  const bodyText = await page.locator('body').innerText();
  const htmlLang = await page.locator('html').getAttribute('lang');
  const title = await page.title();

  console.log('URL:', page.url());
  console.log('TITLE:', title);
  console.log('HTML_LANG:', htmlLang);
  console.log('BODY_HEAD:', bodyText.slice(0, 1000));
  console.log('CONSOLE_ERRORS:', consoleErrors);
  console.log('PAGE_ERRORS:', pageErrors);

  await expect(page).toHaveURL(/\/zh\/docs\/freebci-daq\/?$/);
  expect(htmlLang || '').toMatch(/^zh/);
  expect(bodyText).not.toMatch(/Page Not Found|This page could not be found|404/i);
  expect(bodyText).toMatch(/中文|快速开始|硬件|采集|文档|参考|开发者|系统|配置|连接/);
  expect(pageErrors).toEqual([]);
});

test('ZH quick-start should render Chinese and not client-side 404', async ({ page }) => {
  await page.goto(`${BASE_URL}/zh/docs/freebci-daq/quick-start/`, {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForSelector('#__docusaurus', { timeout: 10000 });

  const bodyText = await page.locator('body').innerText();
  const htmlLang = await page.locator('html').getAttribute('lang');

  console.log('URL:', page.url());
  console.log('HTML_LANG:', htmlLang);
  console.log('BODY_HEAD:', bodyText.slice(0, 1000));

  expect(htmlLang || '').toMatch(/^zh/);
  expect(bodyText).not.toMatch(/Page Not Found|This page could not be found|404/i);
  expect(bodyText).toMatch(/快速开始|安装|连接|采集|配置|FreeBCI/);
});

test('Internal links on ZH docs should stay under /zh/', async ({ page }) => {
  await page.goto(`${BASE_URL}/zh/docs/freebci-daq/`, {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForSelector('#__docusaurus', { timeout: 10000 });

  const links = await page.locator('a[href]').evaluateAll((anchors) =>
    anchors
      .map(a => ({
        text: (a.textContent || '').trim(),
        href: (a as HTMLAnchorElement).href,
        raw: a.getAttribute('href'),
        isLocaleSwitcher: Boolean(
          a.classList.contains('dropdown__link') &&
            a.closest('.navbar__item.dropdown.dropdown--hoverable')
        ),
      }))
      .filter(a => a.raw && !a.raw.startsWith('#'))
      .slice(0, 100)
  );

  console.log('LINKS:', JSON.stringify(links, null, 2));

  const suspicious = links.filter(link => {
    if (!link.raw) return false;
    if (link.raw.startsWith('http')) return false;
    if (link.raw.startsWith('mailto:')) return false;
    if (link.isLocaleSwitcher) return false;
    if (link.raw.startsWith('/docs/freebci-daq')) return true;
    return false;
  });

  expect(suspicious).toEqual([]);
});
