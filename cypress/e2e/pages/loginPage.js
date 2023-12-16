export class LoginPage {
    elements = {
        loginField: () => cy.get('#username'),
        passwordField: () => cy.get('#password'),
        buttonField: () => cy.get('#login-page > div > form > div.modal-footer > button.btn.btn-primary'),
    };

    login (login, password) {
        this.elements.loginField().type(login);
        this.elements.passwordField().type(password);
        this.elements.buttonField().click();
    }
}