import { getHome } from "./controller/home.js";
import {
  getLogin,
  getRegister,
  postRegister,
  postLogin,
  getLogout,
} from "./controller/user.js";
import { getCreate } from "./controller/events.js";

const app = Sammy("body", function () {
  this.use("Handlebars", "hbs");

  this.get("#/home", getHome);

  this.get("#/login", getLogin);

  this.get("#/register", getRegister);
  this.post("#/register", postRegister);

  this.post("#/login", postLogin);
  this.get("#/logout", getLogout);

  this.get("#/create", getCreate);
});
app.run("#/home");
