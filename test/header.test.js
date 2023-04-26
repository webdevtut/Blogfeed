const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
    const sum = 1 + 2;

    expect(sum).toEqual(3);
});

test('We can launch browser', async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000');

    const text = await page.$eval('img.logoImg', el => el.innerHTML);

    expect(text).toEqual("");
});