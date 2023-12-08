describe("Verifier Website - Тест загрузки страницы в Electron", () => {
  it("Должен успешно загрузить страницу сайта sqlverifier-live", () => {
    Cypress.config("baseUrl", "https://sqlverifier-staging-08050d656f7a.herokuapp.com");
    cy.visit('');

    cy.get("#app-header > nav > div > a > span.brand-title").should("be.visible");
  });
});