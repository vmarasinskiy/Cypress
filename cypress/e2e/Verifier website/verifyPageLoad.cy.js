describe("Verifier Website - Тест загрузки страницы", () => {
  it("Должен успешно загрузить страницу сайта sqlverifier", () => {
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/");

    cy.get("#app-header > nav > div > a > span.brand-title").should("be.visible");
  });
});
