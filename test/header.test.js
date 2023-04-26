const puppeteer = require('puppeteer');

let browser, page;
beforeAll(async () => {
    browser = await puppeteer.launch({
            headless: false
        });
    page = await browser.newPage();
        await page.goto('localhost:3000');
});

afterAll(async () => {
  await browser.close();
});


test('Header can load logo', async () => {

    const text = await page.$eval('img.logoImg', el => el.innerHTML);

    expect(text).toEqual("");
});

test('Clicking login starts oauth flow', async () => {

    const text = await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);

});