const express = require("express");
const app = express();

app.get("/.well-known/aiacta.json", (req, res) => {
  res.json({
    aiacta_version: "1.0",
    publisher: "Example Inc.",
    base_url: "https://example.com",
    contact: "contact@example.com"
  });
});

app.listen(3000, () => {
  console.log("AIACTA MVS server running on port 3000");
});
