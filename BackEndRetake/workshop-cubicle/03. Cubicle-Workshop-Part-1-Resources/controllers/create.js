module.exports = {
  create: (req, res) => {
    res.render("create", { title: "Create" });
  },
  post: (req, res) => {
    res.redirect("/");
  },
};
