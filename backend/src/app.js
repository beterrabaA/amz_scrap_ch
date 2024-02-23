import express from "express";
import cors from "cors";
import { ScrapeRoute } from "./routes/scrape.route.js";
import "dotenv/config";

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000; // get .env port
    this.scrapeRoute = new ScrapeRoute();
    this.middlewaresInitialize();
    this.initializeRoutes();
  }

  // initialize root /api route
  initializeRoutes() {
    this.app.use("/api", this.scrapeRoute.router);
  }

  // initialize middlewares
  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  }

  // initiate server listener
  listen() {
    this.app.listen(this.port, () =>
      console.log(`server is running at http://localhost:${this.port} `)
    );
  }
}

export { App };
