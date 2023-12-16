const n_email = require("../../../../fixtures/negative_email.json");

describe("Verifier Website - Тест загрузки страницы", () => {
  beforeEach(() => {
    // Открыта страница
    cy.visit("/");
  });

  it("Открыта форма регистрации", () => {
    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Register
    cy.get('[data-cy="register"] > span').click();

    // Форма регистрации открыта
    cy.url().should("include", "/account/register");

    // Нажать на кнопку username
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="username"]').should("be.visible");

    // Невалидные значения
    
      n_email.forEach((item) => {
        cy.get('#email').clear().type(item).should('not.include.text', 'Your email is invalid.')
      });


   });
});

//cy.get("#username").then((UserNameField) => {
//cy.get("#username").clear().type(item).should('have.attr', 'aria-invalid', 'false');



