const puppeteer = require("puppeteer");
const sessionFactory =require('../factories/sessionFactory');
const userFactory =require('../factories/userFactory');

class CustomPage {
  static async build() {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    const customPage = new CustomPage(page, browser);
    return new Proxy(customPage, {
      get: function (target, property) {
        return target[property] || page[property] || browser[property];
      },
    });
  }
  constructor(page, browser) {
    this.page = page;
    this.browser = browser;
  }

  close() {
    this.browser.close(); // alternate priority
  }

  async login() {
    const user = await userFactory();

    const { session, sig } = sessionFactory(user);

    await this.page.setCookie({ name: "session", value: session });
    await this.page.setCookie({ name: "session.sig", value: sig });
    await this.page.goto("localhost:3000/blogs");
    await this.page.waitFor('a[href="/auth/logout"');
  }

  async getContentsOf(selector) {
    return this.page.$eval(selector, (el) => el.innerHTML);
  }

  async getClassNameOf(selector) {
    return this.page.$eval(selector, (el) => el.className);
  }

  async get(path) {
    return this.page.evaluate((_path) => {
      return fetch(_path, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    }, path);
  }

  async post(path, data) {
    return this.page.evaluate(
      (_path, _data) => {
        return fetch(_path, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _data }),
        }).then((res) => res.json());
      },
      path,
      data
    );
  }

  execRequest(actions) {
    return Promise.all(
      actions.map(({ method, path, data }) => {
        return this[method](path, data);
      })
    );
  }
}

module.exports = CustomPage;
