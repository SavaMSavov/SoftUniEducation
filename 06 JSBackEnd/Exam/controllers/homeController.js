const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home/home", { title: "Shared Trips Site" });
});

module.exports = router;
