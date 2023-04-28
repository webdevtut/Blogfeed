const puppeteer = require("puppeteer");

class CustomPage {
  static async build() {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    const customPage = new CustomPage(page, browser);
    return new Proxy(customPage, {
      get: function (target, property) {
        return target[property] || page[property] ||  browser[property];
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
}

module.exports = CustomPage;
