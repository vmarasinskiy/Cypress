import { LoginPage } from "../../pages/loginPage";
const loginPageElements = require("../../../fixtures/login/loginPageSelectors.json");

describe("Verifier Website - Тест загрузки страницы", () => {
  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit("/");
  });
});

describe("Авторизация под зарегистрированным пользователем", () =>  {
  it("Авторизован под зарегистрированным пользователем", () => {
    
    // Зайти на страницу
    cy.visit("/");

    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Sign In
    cy.get("#login-item").click();
    
    cy.request({
      method: "GET",
      headers: {
        Cookie: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2bWFyYXNpbnNraXkxIiwiZXhwIjoxNzA1NTY2MjMxLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MDI5NzQyMzF9.dHwvytn0YGLABDKl8m-POaB_H2La1nbCD0dfph668-rQGbISdMUUV7WWhaqUSIDo3yFbb7rY0zXbVqkL-ttCbw",
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
      body: {
        username: "vmarasinskiy1",
        password: "123456!",
        rememberMe: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.request({
      method: "POST",
      headers: {
        Cookie: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2bWFyYXNpbnNraXkxIiwiZXhwIjoxNzA1NTY2MjMxLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MDI5NzQyMzF9.dHwvytn0YGLABDKl8m-POaB_H2La1nbCD0dfph668-rQGbISdMUUV7WWhaqUSIDo3yFbb7rY0zXbVqkL-ttCbw",
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
      body: {
        "id": 0,
        "text": "Hello world",
        "answer": "Hello world",
        "title": "Hello world"
      }
    }).then((response) => {
      expect(response.status).to.eq(401);
    });

    cy.request({
      method: "POST",
      headers: {
        Cookie: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2bWFyYXNpbnNraXkxIiwiZXhwIjoxNzA1NTY2MjMxLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MDI5NzQyMzF9.dHwvytn0YGLABDKl8m-POaB_H2La1nbCD0dfph668-rQGbISdMUUV7WWhaqUSIDo3yFbb7rY0zXbVqkL-ttCbw",
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
      body: {
        "id": 0,
        "text": "H",
        "answer": "H",
        "title": "H"
      }
    }).then((response) => {
      expect(response.status).to.eq(403);
    });

    cy.request({
      method: "PUT",
      headers: {
        Cookie: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2bWFyYXNpbnNraXkxIiwiZXhwIjoxNzA1NTY2MjMxLCJhdXRoIjoiUk9MRV9VU0VSX1NUVURFTlQiLCJpYXQiOjE3MDI5NzQyMzF9.dHwvytn0YGLABDKl8m-POaB_H2La1nbCD0dfph668-rQGbISdMUUV7WWhaqUSIDo3yFbb7rY0zXbVqkL-ttCbw",
      },
      url: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/tasks",
      body: {
        "id": 3066,
        "text": "Hi",
        "answer": "Hi",
        "title": "Hi"
    }
    }).then((response) => {
      expect(response.status).to.eq(403);
    });

  });
});
