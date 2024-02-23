// import puppetter from "puppeteer";
import * as cheerio from "cheerio";
import axios from "axios";

export class ScrapeUseCase {
  constructor() {}

  // async method to loadpage and return product list
  async loadPage(search) {
    // request data from html data that search product name
    const produtos = await this.getHTML(search);

    return produtos;
  }

  // async method to request from amazon website
  async getHTML(productName) {
    // amazon url
    const amazon_url = `https://www.amazon.com/s?k=${productName}`;
    // add a fake header to be authorized and get acess of html content
    const fakeHead = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
    };
    // get amazon html using url and custom header
    const response = await axios.get(amazon_url, { headers: fakeHead });
    // html data
    const html = response.data;
    // Products list
    const productsList = [];
    // Use Cheerio to parse the HTML
    const $ = cheerio.load(html);

    const products = $('[data-component-type="s-search-result"]');

    products.each((i, element) => {
      const content = $(element);

      // get product title from html node
      const title = content
        .find("span.a-size-base-plus.a-color-base.a-text-normal")
        .text()
        .trim();

      // get product price data from html node
      const price = content.find("span.a-offscreen").first().text();

      // get product rating from html node
      const rating =
        content
          .find("i.a-icon.a-icon-star-small.a-star-small-4-5.aok-align-bottom")
          .text() || "5 out of 5 stars"; // set a default value when return a null value

      // get product reviews data from html node
      const reviews =
        content.find("span.a-size-base.s-underline-text").text() ||
        "No reviews"; // set a default value when return a null value

      // get product image url from html node
      const imageUrl = content.find("img.s-image").attr("src");

      // add data at product list
      productsList.push({ title, price, rating, reviews, imageUrl });
    });

    return productsList;
  }
}
