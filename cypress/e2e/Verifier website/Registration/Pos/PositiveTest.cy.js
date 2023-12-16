const userNames = require("../../../../fixtures/positive.json");
const emailData = require("../../../../fixtures/positive_1.json");
const PasswordData = require("../../../../fixtures/positive_2.json")

describe("Verifier Website - Тест загрузки страницы", () => {
  beforeEach(() => {
    // Открыта страница
    cy.visit("/");
  });

  it("Открыта форма регистрации", () => {
    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Account
    cy.get('[data-cy="register"] > span').click();

    // Форма регистрации открыта
    cy.url().should("include", "/account/register");

    // Нажать на кнопку username
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="username"]').should("be.visible");

    // Валидные значения UserName
        userNames.forEach((item) => {
        cy.get("#username").clear().type(item).should('have.attr', 'aria-invalid', 'false');
      });
    // Валидные значения Email
    emailData.forEach((item) => {
      cy.get("#email").clear().type(item).should('have.attr', 'aria-invalid', 'false');
    });
    // Валидные значения firstPassword
    PasswordData.forEach((item) => {
      cy.get("#firstPassword").clear().type(item).should('have.attr', 'aria-invalid', 'false');
    });
       // Валидные значения secondPassword
       PasswordData.forEach((item) => {
        cy.get("#secondPassword").clear().type(item).should('have.attr', 'aria-invalid', 'false');
      });
   });
});



