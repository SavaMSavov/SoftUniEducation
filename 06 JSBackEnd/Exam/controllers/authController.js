const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest, isUser } = require("../middlewares/guards");

router.get("/register", isGuest(), (req, res) => {
  res.render("user/register", { title: "Register" });
});

router.post(
  "/register",
  isGuest(),
  body("usernameField")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 charecters long.")
    .bail()
    .isAlphanumeric()
    .withMessage("Username may contain only english letters and numbers."),

  body("passwordField")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 charecters long.")
    .bail()
    .isAlphanumeric()
    .withMessage("Password may contain only english letters and numbers."),
  body("rePass").custom((value, { req }) => {
    if (value != req.body.passwordField) {
      throw new Error("Password dont match");
    }
    return true;
  }),
  async (req, res) => {
    const { errors } = validationResult(req);

    try {
      if (errors.length > 0) {
        const message = errors.map((e) => e.msg).join("\n");
        throw new Error(message);
      }

      await req.auth.register(req.body.usernameField, req.body.passwordField);
      res.redirect("/");
    } catch (err) {
      console.log(err.message);
      const ctx = {
        errors: err.message.split("\n"),
        userData: {
          username: req.body.usernameField,
        },
      };
      res.render("user/register", ctx);
    }
  }
);

router.get("/login", isGuest(), (req, res) => {
  res.render("user/login");
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    await req.auth.login(req.body.usernameField, req.body.passwordField);
    res.redirect("/");
  } catch (err) {
    const ctx = {
      errors: [err.message],
      userData: {
        username: req.body.usernameField,
      },
    };
    res.render("user/login", ctx);
  }
});

router.get("/logout", (req, res) => {
  req.auth.logout();
  res.redirect("/");
});
module.exports = router;
