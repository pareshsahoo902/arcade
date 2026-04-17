const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');

  // Take screenshot of the hub
  await page.setViewportSize({ width: 1280, height: 1800 });
  await page.screenshot({ path: 'verification/portal_resolved.png', fullPage: true });

  // Verify links
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a.game-card')).map(a => ({
      href: a.getAttribute('href'),
      title: a.querySelector('h2').innerText
    }));
  });
  console.log('Found game links:', JSON.stringify(links, null, 2));

  await browser.close();
})();
