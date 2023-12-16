describe("Verifier Website - Тест загрузки страницы", () => {
  before(() => {
    cy.visit('/');

    // Авторизация
    const login = "user-v";
    const password = "123456!";

    cy.get("#account-menu").click();
    cy.get("#login-item").click();
    cy.get('input[name="username"]').type(login);
    cy.get('input[name="password"]').type(password);
    cy.get('form').submit();
    cy.url().should("include", "?page=1&sort=id,asc");
  });

  it("Test", () => {
    // 1. Нажать на кнопку Home
    cy.get("#header-tabs > li:nth-child(1) > a").click();
    cy.get("#header-tabs > li:nth-child(1) > a").should("be.visible");
    cy.url().should("include", "/");

    // 2. Нажать на кнопку Task в меню Entities
    cy.get("#entity-menu").click();
    cy.get("#entity-menu > div > a:nth-child(1)").click();
    cy.url().should("include", "/task?page=1&sort=id,asc");

    // 3. Нажать на кнопку User Task в меню Entities
    cy.get("#entity-menu").click();
    cy.get("#entity-menu > div > a:nth-child(2)").click();
    cy.url().should("include", "/user-task");

    // 4. Нажать на кнопку API в меню SWAGGER
    cy.get("#docs-menu").click();
    cy.get("#docs-menu > div > a").click();
    cy.url().should("include", "docs/docs");

    // 5. Нажать на кнопку English в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get("#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(1)").click();
    cy.url().should("include", "docs/docs");

    // 6. Нажать на кнопку Français в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get("#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(2)").click();
    cy.url().should("include", "docs/docs");

    // 7. Нажать на кнопку Русский в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get("#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(3)").click();
    cy.url().should("include", "docs/docs");

    // 8. Нажать на кнопку Українська в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get("#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(4)").click();
    cy.url().should("include", "docs/docs");

    // 9. Нажать на кнопку Настройки в меню Профиль
    cy.get("#account-menu").click();
    cy.get("#account-menu > div > a:nth-child(1)").click();
    cy.url().should("include", "/account/settings");

    // 10. Нажать на кнопку Пароль в меню Профиль
    cy.get("#account-menu").click();
    cy.get("#account-menu > div > a.dropdown-item.active > svg").click();
    cy.url().should("include", "/account/settings");

    // 11. Нажать на кнопку Пароль в меню Профиль
    cy.get("#account-menu").click();
    cy.get("#account-menu > div > a:nth-child(3) > svg").click();
    cy.url().should("include", "/logout");
  });
});