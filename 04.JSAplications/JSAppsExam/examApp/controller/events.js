import commonPartials from "./partials.js";

import { setHeader } from "./auth.js";

export function getCreate(ctx) {
  setHeader(ctx);
  ctx.loadPartials(commonPartials).partial("./view/events/create.hbs");
}

export function postCreate(ctx) {
  const { title, description, imageUrl } = ctx.params;
}
