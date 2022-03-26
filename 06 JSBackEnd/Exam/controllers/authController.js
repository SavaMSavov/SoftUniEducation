const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest, isUser } = require("../middlewares/guards");

router.get("/register", isGuest(), (req, res) => {
  res.render("user/register", { title: "Register" });
});

router.post(
  "/register",
  isGuest(),
  body("email", "Invalid Email").isEmail(),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 charecters long."),
  body("rePass").custom((value, { req }) => {
    if (value != req.body.password) {
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

      await req.auth.register(req.body.email, req.body.password);
      res.redirect("/");
    } catch (err) {
      console.log(err.message);
      const ctx = {
        errors: err.message.split("\n"),
        userData: {
          email: req.body.email,
        },
      };
      res.render("user/register", ctx);
    }
  }
);

router.get("/login", isGuest(), (req, res) => {
  res.render("user/login", { title: "Login" });
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    await req.auth.login(req.body.email, req.body.password);
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    let errors = [err.message];
    if (err.type == "credential") {
      errors = ["Incorect email or password"];
    }
    const ctx = {
      errors,
      userData: {
        email: req.body.email,
      },
    };
    res.render("user/login", ctx);
  }
});

router.get("/logout", (req, res) => {
  req.auth.logout();
  res.redirect("/");
});

router.get("/profile", isUser(), (req, res) => {
  res.render("user/profile", { title: "Profile" });
});
module.exports = router;
