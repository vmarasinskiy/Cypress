describe("Verifier Website - Тест загрузки страницы", () => {
  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit("/");
  });

  // Добавление теста для авторизации с заданными данными
  it("Авторизован под зарегистрированным пользователем", () => {
    const login = "student";
    const password = "123456!";

    // Зайти на страницу
    cy.visit("/");

    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Sign In
    cy.get("#login-item").click();

    // Ввод логина и пароля
    cy.get('input[name="username"]').type(login);
    cy.get('input[name="password"]').type(password);

    // Клик по кнопке "Войти"
    cy.get('button[type="submit"]').click();

    // Проверка успешной авторизации
    cy.url().should("include", "?page=1&sort=id,asc");
  });

  it("Test", () => {
    const login = "student";
    const password = "123456!";

    // Зайти на страницу
    cy.visit("/");

    // Нажать на кнопку Account
    cy.get("#account-menu").click();

    // Нажать на кнопку Sign In
    cy.get("#login-item").click();

    // Ввод логина и пароля
    cy.get('input[name="username"]').type(login);
    cy.get('input[name="password"]').type(password);

    // Клик по кнопке "Войти"
    cy.get('button[type="submit"]').click();

    // Проверка успешной авторизации
    cy.url().should("include", "?page=1&sort=id,asc");

    // 1_Нажать на кнопку Home
    cy.get("#header-tabs").click();
    cy.get("#header-tabs").should("be.visible");
    cy.url().should("include", "/?page=1&sort=id,asc");

    // 2_Нажать на кнопку Task в меню Entities
    cy.get("#entity-menu").click();
    cy.get("#entity-menu > div > a:nth-child(1)").click();
    cy.url().should("include", "/task?page=1&sort=id,asc");

    // 3_Нажать на кнопку User Task в меню Entities
    cy.get("#entity-menu").click();
    cy.get("#entity-menu > div > a:nth-child(2)").click();
    cy.url().should("include", "/user-task");

    // 4_Нажать на кнопку API в меню SWAGGER
    cy.get("#docs-menu").click();
    cy.get("#docs-menu > div > a").click();
    cy.url().should("include", "docs/docs");

    // 5_Нажать на кнопку English в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(1)"
    ).click();
    cy.url().should("include", "docs/docs");

    // 6_Нажать на кнопку Français в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(2)"
    ).click();
    cy.url().should("include", "docs/docs");

    // 7_Нажать на кнопку Русский в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(3)"
    ).click();
    cy.url().should("include", "docs/docs");

    // 8_Нажать на кнопку Українська в меню English
    cy.get("#header-tabs > li:nth-child(4) > a").click();
    cy.get(
      "#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(4)"
    ).click();
    cy.url().should("include", "docs/docs");

    // 9_Нажать на кнопку Настройки в меню Профиль
    cy.get("#account-menu").click();
    cy.get("#account-menu > div > a:nth-child(1)").click();
    cy.url().should("include", "/account/settings");

    // 10_Нажать на кнопку Пароль в меню Профиль
    cy.get("#account-menu").click();
    cy.get("#account-menu > div > a.dropdown-item.active > svg").click();
    cy.url().should("include", "/account/settings");

    // 11_Нажать на кнопку Пароль в меню Профиль
    cy.get("#account-menu").click();
    cy.get("#account-menu > div > a:nth-child(3) > svg").click();
    cy.url().should("include", "/logout");
  });
});
