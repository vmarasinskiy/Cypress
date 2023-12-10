describe("Verifier Website - Тест загрузки страницы", () => {
  beforeEach(() => {
    // Задаем baseUrl из конфигурации
    cy.visit('/');
  });

  it("Авторизован под зарегистрированным пользователем", () => {
    const login = 'user-v';
    const password = '123456!';
    
    // Вызвать кастомную команду для авторизации
    cy.login(login, password);

    // Проверка успешной авторизации
    cy.url().should('include', '?page=1&sort=id,asc');
  });
});