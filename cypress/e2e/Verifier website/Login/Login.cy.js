import { LoginPage } from "../../pages/loginPage";
import "../../../support/commands";
const loginPageElements = require("../../../fixtures/login/loginPageSelectors.json");

describe("Verifier Website - Тест загрузки страницы", () => {
  let loginPage;

  before(() => {
    // Инициализация LoginPage
    loginPage = new LoginPage();
  });

  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit("/");
  });

  it("Авторизован под зарегистрированным пользователем", () => {
    let m_login = "student";
    let m_password = "123456!";

    // Зайти на страницу
    cy.visit("/");

    // Залогиниться с использованием метода класса LoginPage
    loginPage.login(m_login, m_password);

    cy.url().should("include", "?page=1&sort=id,asc");

    //Разлогиниться
    cy.get("#account-menu").click();
    cy.get(loginPageElements.signButton).click();
  });
});
