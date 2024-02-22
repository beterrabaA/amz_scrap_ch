import express from "express";
import "dotenv/config";

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewaresInitialize();
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
