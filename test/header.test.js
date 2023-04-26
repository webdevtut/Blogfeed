const puppeteer = require('puppeteer');

let browser, page;
beforeEach(async () => {
    browser = await puppeteer.launch({
            headless: false
        });
    page = await browser.newPage();
        await page.goto('localhost:3000');
});

afterEach(async () => {
  await browser.close();
});


test('We can launch browser', async () => {

    const text = await page.$eval('img.logoImg', el => el.innerHTML);

    expect(text).toEqual("");
});