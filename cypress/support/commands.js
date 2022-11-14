import { createPost, deletePost, login, logout } from "../../src/js/api/index";

Cypress.Commands.add("login", async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add("logout", () => {
  logout();
});

Cypress.Commands.add("postMaker", async (title, body, media, tags) => {
  return await createPost(title, body, media, tags);
});

Cypress.Commands.add("deletePost", async (id) => {
  await deletePost(id);
});
