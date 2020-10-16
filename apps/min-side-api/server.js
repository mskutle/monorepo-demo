const express = require("express");
const { slugify, log } = require("milescreate-utils");

const app = express();

app.get("/slugify/:text", (req, res) => {
  const { text } = req.params;
  log("Sluggifying text:", text);
  res.json({ slug: slugify(text) });
});

app.listen(4000, () => console.log("Server started."));
