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

    const text = await page.$eval('img[alt="logo"]', el => el.className);

    expect(text).toEqual("blogFeed");
});

test('Clicking login starts oauth flow', async () => {

    const text = await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);

});

test("When signed in shows logout button", async () => {
  const id = "64427d2b6cdc1d2decf2e98f";

  const Buffer = require("safe-buffer").Buffer;

  const sessionObject = {
    passport: {
      user: id,
    },
  };

  const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString(
    "base64"
  );

  const Keygrip = require("keygrip");

  const keys = require("../config/keys");

  const keygrip = new Keygrip([keys.cookieKey]);

  const sig = keygrip.sign("session=" + sessionString);

  
   await page.setCookie({name: 'session', value: sessionString});
   await page.setCookie({name: 'session.sig', value: sig});
   await page.goto('localhost:3000');
   await page.waitFor('a[href="/auth/logout"')
   const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

   expect(text).toEqual("Logout");
});