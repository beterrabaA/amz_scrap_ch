import { ScrapeUseCase } from "../useCases/scrape.useCase.js";

export class ScrapeController {
  constructor() {
    this.usecase = new ScrapeUseCase();
  }

  async scrapePage(req, res, next) {
    // get product name from query params
    const search = req.query.keyword;

    try {
      // use loadPage from usecase layer to get data
      const data = await this.usecase.loadPage(search);
      // return json format data and status code 200 --- ok status
      return res.status(200).json(data);
    } catch (error) {
      // handle errpr
      return res.status(404).json({ message: error.message });
    }
  }
}
