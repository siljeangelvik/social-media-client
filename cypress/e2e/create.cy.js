describe("postCreaterTest", () => {
  const email = Cypress.env("EMAIL");
  const password = Cypress.env("PASSWORD");
  it("loads", () => {
    cy.visit("/");
    cy.login(email, password);

    cy.makePost("test title", "test body").then((postTest) => {
      expect(postTest.id).to.not.be.undefined;

      cy.deletePost(postTest.id);
    });
  });
});
