describe("Verifier Website - Тест загрузки страницы", () => {
  it("Должен успешно загрузить страницу сайта ya.ru", () => {
    cy.visit("https://ya.ru");

    cy.get("#text").should("be.visible");
  });
});
