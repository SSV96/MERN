const express = require("express");

const router = express.Router();

const path = require("path");

// regex = search for / or index or index.html  any of three will hit this route
router.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
