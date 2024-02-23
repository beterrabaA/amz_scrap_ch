import { ScrapeUseCase } from "../useCases/scrape.useCase.js";

export class ScrapeController {
  constructor() {
    this.usecase = new ScrapeUseCase();
  }

  async scrapePage(req, res, next) {
    const search = req.query.keyword;

    try {
      const data = await this.usecase.loadPage(search);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
