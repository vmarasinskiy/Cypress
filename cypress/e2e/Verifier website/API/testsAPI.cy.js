import { LoginPage } from "../../pages/loginPage";
const loginPageElements = require("../../../fixtures/login/loginPageSelectors.json");
const adminToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2bWFyYXNpbnNraXkxIiwiZXhwIjoxNzAzNTcwNDIyLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MDM0ODQwMjJ9.qMp22lfzHHdIRYMBceDhVmtpR74-y4nxBgkXOgXKz0HgjOvnfMZJfNSh7Z7SnoD2X2y8XH8J1sgeuBvamyR7zA";

describe("Verifier Website - Тест загрузки страницы", () => {
  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit("/");
  });
});

describe("Авторизация под зарегистрированным пользователем", () => {
  it("Авторизован под зарегистрированным пользователем", () => {
    // Зайти на страницу
    cy.visit("/");

    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Sign In
    cy.get("#login-item").click();

    cy.request({
      method: "POST",
      headers: {
        Authorization: "Bearer " + adminToken,
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/authentificate",
      body: {
        username: "vmarasinskiy",
        password: "123456!",
        rememberMe: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.request({
      method: "POST",
      headers: {
        Authorization: "Bearer " + adminToken,
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
      body: {
        id: 0,
        text: "Hello world",
        answer: "Hello world",
        title: "Hello world",
      },
    }).then((response) => {
      expect(response.status).to.eq(401);
    });

    cy.request({
      method: "POST",
      headers: {
        Authorization: "Bearer " + adminToken,
        },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
      body: {
        id: 0,
        text: "H",
        answer: "H",
        title: "H",
      },
    }).then((response) => {
      expect(response.status).to.eq(403);
    });

    cy.request({
      method: "PUT",
      headers: {
        Authorization: "Bearer " + adminToken,
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
      body: {
        id: 3066,
        text: "Hi",
        answer: "Hi",
        title: "Hi",
      },
    }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });
});
