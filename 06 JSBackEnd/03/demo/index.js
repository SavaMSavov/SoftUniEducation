const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/catalog", (req, res) => {
  res.send("Catalog page");
});

app.get("/catalog/:productId", (req, res) => {
  console.log(req.params);
  res.send("Product page");
});

app.post("/catalog", (req, res) => {
  res.status(201);
  res.send("Article created");
});

app.get("/tos", (req, res) => {
  res.sendFile(__dirname + "/demo.pdf");
});

app.all("/about", (req, res) => {
  res.send("Matching all HTTP Methods");
});

app.listen(3000, () => console.log("Server listening on port 3000"));
