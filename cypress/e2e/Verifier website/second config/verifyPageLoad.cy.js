describe("Verifier Website - Тест загрузки страницы", () => {
  it("Должен успешно загрузить страницу сайта sqlverifier-live", () => {
    cy.visit('/');

    cy.get("#app-header > nav > div > a > span.brand-title").should("be.visible");
  });
});
