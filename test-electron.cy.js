describe("Verifier Website - Тест загрузки страницы в Electron", () => {
  it("Должен успешно загрузить страницу сайта sqlverifier-live", () => {
    cy.visit('');

    cy.get("#app-header > nav > div > a > span.brand-title").should("be.visible");
  });
});