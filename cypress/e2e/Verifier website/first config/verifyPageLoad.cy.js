describe("Verifier Website - Тест загрузки страницы", () => {
  it("Должен успешно загрузить страницу сайта sqlverifier-live", () => {
    cy.visit("/");

    cy.contains("Home").click({force: true});
  });
});
