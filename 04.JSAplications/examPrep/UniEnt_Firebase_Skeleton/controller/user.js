import commonPartial from "./partial.js";
import { registerUser, login, logout } from "../models/user.js";
import { saveUserInfo, setHeader } from "./auth.js";

export function getLogin(ctx) {
  ctx.loadPartials(commonPartial).partial("./view/user/login.hbs");
}

export function getProfile(ctx) {
  setHeader(ctx);

  ctx.loadPartials(commonPartial).partial("./view/user/profile.hbs");
}

export function getRegister(ctx) {
  ctx.loadPartials(commonPartial).partial("./view/user/register.hbs");
}

export function postRegister(ctx) {
  const { username, password, rePassword } = ctx.params;

  if (password !== rePassword) {
    throw new Error("Passwords dont match");
  }

  registerUser(username, password)
    .then((res) => {
      saveUserInfo(res.user.email);
      ctx.redirect("#/home");
    })
    .catch((e) => console.log(e));
}

export function postLogin(ctx) {
  const { username, password } = ctx.params;
  login(username, password)
    .then((res) => {
      saveUserInfo(res.user.email);
      notify("Logged In!", "#successBox");
      ctx.redirect("#/home");
    })
    .catch((e) => {
      notify(`${e.message}`, "#errorBox");
    });
}

export function getLogout(ctx) {
  logout()
    .then(() => {
      sessionStorage.clear;

      ctx.redirect("#/login");
    })
    .catch((e) => console.log(e));
}

function notify(message, selector) {
  const notification = document.querySelector(selector);
  notification.textContent = message;
  notification.style.display = "block";
}
