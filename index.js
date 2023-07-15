const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get("/timeout", async (req, res) => {
  // simulate a delay and console log every 1 second
  for (let i = 0; i < 120; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("On second: " + i);
  }

  res.send("Timeout test completed");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
