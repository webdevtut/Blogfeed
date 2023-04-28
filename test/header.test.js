const sessionFactory =require('./factories/sessionFactory');
const userFactory =require('./factories/userFactory');

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

    const text = await page.$eval('img[alt="logo"]', el => el.className);

    expect(text).toEqual("blogFeed");
});

test('Clicking login starts oauth flow', async () => {

    const text = await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);

});

test("When signed in shows logout button", async () => {
//   const id = "64427d2b6cdc1d2decf2e98f";

    const user = await userFactory();

  const {session, sig} = sessionFactory(user);

   await page.setCookie({name: 'session', value: session});
   await page.setCookie({name: 'session.sig', value: sig});
   await page.goto('localhost:3000');
   await page.waitFor('a[href="/auth/logout"')
   const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

   expect(text).toEqual("Logout");
});