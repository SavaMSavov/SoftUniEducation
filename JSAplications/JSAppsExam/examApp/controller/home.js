import commonPartials from "./partials.js";
import { setHeader } from "./auth.js";
export function getHome(ctx) {
  setHeader(ctx);
  ctx.loadPartials(commonPartials).partial("./view/home.hbs");
}
