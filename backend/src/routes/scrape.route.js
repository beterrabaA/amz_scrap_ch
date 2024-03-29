import { Router } from "express";
import { ScrapeController } from "../controllers/scrape.controller.js";

export class ScrapeRoute {
  constructor() {
    this.router = Router();
    this.controller = new ScrapeController();
    this.initRoutes();
  }

  initRoutes() {
    // get method "/api/scrape" route
    this.router.get(
      "/scrape",
      this.controller.scrapePage.bind(this.controller)
    );
  }
}
