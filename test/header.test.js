const Page = require('./helpers/page');

let page;
beforeEach(async () => {
        page = await Page.build();
        await page.goto('localhost:3000');
});

afterEach(async () => {
  await page.close();
});


test('Header can load logo', async () => {

    const text = await page.getClassNameOf('img[alt="logo"]');

    expect(text).toEqual("blogFeed");
});

test('Clicking login starts oauth flow', async () => {

    const text = await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);

});

test("When signed in shows logout button", async () => {

    await page.login();

   const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

   expect(text).toEqual("Logout");
});