const express = require("express");
require("dotenv").config();
const next = require("next");
const PORT = parseInt(process.env.PORT || 3000);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();

initialize();

async function initialize() {
  console.log("Preparing next app and starting server...... ");
  nextApp.prepare().then(() => {
    app.get("*", (req, res) => {
      return handle(req, res);
    });
    app
      .listen(PORT, () => console.log("Server started at Port : ", PORT))
      .on("error", err => {
        if (err.errno === "EADDRINUSE") {
          console.log(
            `----- Port ${PORT} is busy, trying with port ${PORT + 1} -----`
          );
          app.listen(PORT + 1, () =>
            console.log("Server started at Port : ", PORT + 1)
          );
        } else {
          console.log(err);
        }
      });
  });
}
