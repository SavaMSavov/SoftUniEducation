import commonPartials from "./partials.js";
import { registerUser, login, logout } from "../models/user.js";
import { saveUserInfo } from "./auth.js";

export function getLogin(ctx) {
  ctx.loadPartials(commonPartials).partial("./view/user/login.hbs");
}

export function getRegister(ctx) {
  ctx.loadPartials(commonPartials).partial("./view/user/register.hbs");
}

export function postRegister(ctx) {
  const { email, password, repeatPassword } = ctx.params;

  if (password !== repeatPassword) {
    throw new Error("Passwords dont match");
  }

  registerUser(email, password)
    .then((res) => {
      console.log(res.user.email);
      saveUserInfo(res.user.email);
      ctx.redirect("#/home");
    })
    .catch((e) => console.log(e));
}

export function postLogin(ctx) {
  const { email, password, repeatPassword } = ctx.params;
  login(email, password)
    .then((res) => {
      saveUserInfo(res.user.email);
      ctx.redirect("#/home");
    })
    .catch((e) => console.log(e));
}

export function getLogout(ctx) {
  logout()
    .then(() => {
      sessionStorage.clear;
      ctx.redirect("#/login");
    })
    .catch((e) => console.log(e));
}
