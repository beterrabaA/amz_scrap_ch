import * as cheerio from "cheerio";
import axios from "axios";

export class ScrapeUseCase {
  constructor() {}

  async loadPage() {
    const productsData = [];

    const html = await this.getHTML();
    const $ = cheerio.load(html);

    const texto = $("h2.title").text(); // "Hello world"

    console.log(texto);

    return { texto };
  }

  async getHTML(product) {
    const url = `https://www.amazon.com.br/s?k=${product}`;
    const { data: html } = await axios.get(url);
    return html;
  }
}
