describe("Verifier Website - Тест загрузки страницы", () => {
  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit('/');
  });

  // Добавление теста для авторизации с заданными данными
  it("Авторизован под зарегистрированным пользователем", () => {
    const login = 'user-v';
    const password = '123456!';
    
    // Зайти на страницу
    cy.visit('/');

    // Нажать на кнопку Account
    cy.get('#account-menu').click();

    // Нажать на кнопку Sign In
    cy.get('#login-item').click();

    // Ввод логина и пароля
    cy.get('input[name="username"]').type(login);
    cy.get('input[name="password"]').type(password);

    // Клик по кнопке "Войти"
    cy.get('button[type="submit"]').click();

    // Проверка успешной авторизации
    cy.url().should('include', '?page=1&sort=id,asc');
  });
});