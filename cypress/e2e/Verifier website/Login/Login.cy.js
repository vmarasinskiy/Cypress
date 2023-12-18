import { LoginPage } from "../../pages/loginPage";
const loginPageElements = require("../../../fixtures/login/loginPageSelectors.json")

describe("Verifier Website - Тест загрузки страницы", () => {
  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit("/");
  });

    it("Авторизован под зарегистрированным пользователем", () => {
    let loginPage = new LoginPage();
    let m_login = "student";
    let m_password = "123456!";

    // Зайти на страницу
    cy.visit("/");

    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Sign In
    cy.get("#login-item").click();
    loginPage.login(m_login, m_password);

    cy.url().should("include", "?page=1&sort=id,asc");

    //Разлогиниться
    cy.get("#account-menu").click();
    cy.get(loginPageElements.signButton).click();
  });
});