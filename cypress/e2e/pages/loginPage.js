// Импортировать фикстуру в начале файла
const loginPageElements = require("../../fixtures/login/loginPageSelectors.json");

export class LoginPage {

    // Использование селекторов из фикстуры
    elements = {
        loginField: () => cy.get(loginPageElements.loginField),
        passwordField: () => cy.get(loginPageElements.passwordField),
        buttonField: () => cy.get(loginPageElements.buttonField),
    };

    // Использование кастомной команды для логина
    login(login, password) {
        cy.login(login, password);
    }
}