import express from "express";
import { ScrapeRoute } from "./routes/scrape.route.js";
import "dotenv/config";

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.scrapeRoute = new ScrapeRoute();
    this.middlewaresInitialize();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.app.use("/api", this.scrapeRoute.router);
  }

  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`server is running at http://localhost:${this.port} `)
    );
  }
}

export { App };
