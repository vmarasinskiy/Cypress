describe("Verifier Website - Тест загрузки страницы", () => {
  beforeEach(() => {
    Cypress.config("baseUrl", "https://sqlverifier-staging-08050d656f7a.herokuapp.com");
  });

  it("Открыта страница сайта sqlverifier-live", () => {
    cy.visit("/");
  });

  it("Авторизован под зарегистрированным пользователем", () => {
    const login = 'user-v';
    const password = '123456!';
    
    // Зайти на страницу
    cy.visit('/');

    // Вызвать кастомную команду для авторизации
    cy.login(login, password);

    // Проверка успешной авторизации
    cy.url().should('include', '?page=1&sort=id,asc');
  });
});