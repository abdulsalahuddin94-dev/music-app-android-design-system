import { chromium } from 'playwright-core';
const [URL, tag] = process.argv.slice(2);
const O = 'D:/Work/Atomica Live Prototype/.trial/step3/fixed-bars/';
const b = await chromium.launch({ channel: 'chrome' });
for (const [dev, vp] of [['desktop', { width: 1280, height: 900 }], ['phone', { width: 390, height: 844 }]]) {
  const p = await b.newPage({ viewport: vp });
  for (const s of ['explore-full', 'search-discover-full', 'library-music']) {
    await p.goto(`${URL}#/${s}?mode=Dark&lang=en`); await p.reload();
    await p.waitForSelector('.fp-screen [data-component]'); await p.waitForTimeout(800);
    const r = await p.evaluate(() => { const sc = document.querySelector('.fp-screen'); sc.scrollTop = (sc.scrollHeight - sc.clientHeight) * 0.45;
      const nav = document.querySelector('.fp-screen [data-component="Bottom Navigation"]'); const a = sc.getBoundingClientRect(), n = nav.getBoundingClientRect();
      return { navVisible: n.bottom <= a.bottom + 1 && n.top >= a.top - 1 }; });
    await p.waitForTimeout(300);
    await p.screenshot({ path: `${O}${tag}-${dev}-${s}-scrolled.png` });
    console.log(tag, dev, s, JSON.stringify(r));
  }
  await p.close();
}
await b.close();
