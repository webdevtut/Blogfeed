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


test('Header can load logo', async () => {

    const text = await page.$eval('img.logoImg', el => el.innerHTML);

    expect(text).toEqual("");
});

test('Clicking login starts oauth flow', async () => {

    const text = await page.click('.right a');

    const url = await page.url();
    
    console.log(url);

});