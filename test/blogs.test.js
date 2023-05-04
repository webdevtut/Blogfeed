const Page = require('./helpers/page');

let page;

beforeEach(async () => {
        page = await Page.build();
        await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await page.close();
});


describe('When logged in', async () => {

    beforeEach(async () => {
        await page.login();
        await page.click('a.btn-floating');
    });


    test('can see blog create form', async () => {
    
        const label = await page.getContentsOf('form label')
    
        expect(label).toEqual("Blog Title");
    });

    describe('And using valid inputs', async () => {

        beforeEach(async () => {

            await page.type('.title input', 'test title');
            await page.type('.content input', 'test content');
            await page.click('form button');
    });

        test('Submitting takes user to review screen', async() => {
            const headerConfirm = await page.getContentsOf('h5');
            expect(headerConfirm).toEqual("Please confirm your entries");
        });

        test('Submitting then saving adds blog to index page', async() => {
            await page.click('button.green');
            await page.waitFor('.card');
            const title = await page.getContentsOf('.card-title');
            const content = await page.getContentsOf('p');
            expect(title).toEqual('test title');
            expect(content).toEqual('test content');
        });
    });

    describe('And using invalid inputs', async () => {

        beforeEach(async () => {
            await page.click('form button');
        });

        test('the form shows an error message', async() => {
            const titleError = await page.getContentsOf('.title .red-text');
            const contentError = await page.getContentsOf('.content .red-text');
            expect(titleError).toEqual("You must provide a value");
            expect(contentError).toEqual("You must provide a value");
        });
    });


});

describe("When not logged in", async () => {

  const actions = [
    {
      method: "get",
      path: "/api/blogs",
    },
    {
      method: "post",
      path: "/api/blogs",
      data: {
        title: "test title",
        content: "test content",
      },
    },
  ];

  test("Blog related actions are not permitted", async () => {
    const results = await page.execRequest(actions);

    results.forEach((result) => {
      expect(result.error).toEqual("You must log in!");
    });
  });

});