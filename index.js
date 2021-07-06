

require('dotenv').config()

const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/dinoname", async (req, res) => {
  const data = await fetch(
    "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
      },
    }
  );
  const response = await data.json();
  console.log(response);
  res.json(response);
});

app.get("/dinoimage", async (req, res) => {
  const data = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=audi-a-5&count=10",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_KEY_IMAGE,
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );
  const response = await data.json();
  res.json(response);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
