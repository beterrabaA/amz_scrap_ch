import express from "express";

class App {
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
  }

  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(3333, () => console.log("server is running"));
  }
}

export { App };
