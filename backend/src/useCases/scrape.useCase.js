import * as cheerio from "cheerio";
import axios from "axios";

export class ScrapeUseCase {
  constructor() {}

  async loadPage() {
    const productsData = [];

    const $ = cheerio.load(html);

    const texto = $("h2.title").text(); // "Hello world"

    console.log(texto);

    return { texto };
  }
}
