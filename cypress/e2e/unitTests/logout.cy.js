const email = Cypress.env("EMAIL");
const password = Cypress.env("PASSWORD");

describe("logoutTest", () => {
  it("loads", () => {
    cy.visit("/");
    cy.login(email, password);

    cy.logout();

    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
