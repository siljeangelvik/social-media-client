describe("loginTest", () => {
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");
  it("loads", () => {
    cy.visit("/");
    cy.login(email, password);

    cy.getLocalStorage("token").then((token) => {
      expect(token.length).to.not.be.null;
    });
  });
});

// http://localhost:8080/social-media-client/?view=profile&name=Silje
