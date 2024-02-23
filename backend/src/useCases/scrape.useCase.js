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
}
