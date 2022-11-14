import { login } from "/src/js/api/auth/login";
//import {createPost, deletePost, logout} from "../../src/js/api/index";

const email = Cypress.env("EMAIL");
const password = Cypress.env("PASSWORD");

Cypress.Commands.add("login", async (email, password) => {
  Cypress.Commands.addAll({
    login(email, password) {},
    visit(orig, url, options) {},
  });
  Cypress.Commands.overwrite("visit", (orig, url, options) => {});
});

/*
Cypress.Commands.add("logout", () => {
    logout();
});

Cypress.Commands.add("makePost", async (title, body, media, tags) => {
    return await createPost(title, body, media, tags);
});

Cypress.Commands.add("deletePost", async (id) => {
    await deletePost(id);
});
*/
