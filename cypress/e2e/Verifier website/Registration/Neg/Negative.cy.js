const n_userNames = require("../../../../fixtures/negative.json");
const n_email = require("../../../../fixtures/negative_email.json");
const n_password = require("../../../../fixtures/negative_password.json")

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
    
      n_userNames.forEach((item) => {
        cy.get('#username').clear().type(item).should('not.include.text', 'Your username is invalid.');
      });
          //Email
      n_email.forEach((item) => {
        cy.get('#email').clear().type(item).should('not.include.text', 'Your email is invalid.');
      });
      //firstPassword
      n_password.forEach((item) => {
      cy.get("#firstPassword").clear().type(item).should('not.include.text', 'Your password cannot be longer than 50 characters.');
      });
       //secondPassword
       n_password.forEach((item) => {
        cy.get("#secondPassword").clear().type(item).should('not.include.text', 'Your confirmation password cannot be longer than 50 characters.');
      });
   });
});