// Первый тест - Chrome
const chromeTest = "npm run cy:run --spec test-chrome.cy.js";

// Второй тест - Electron
const electronTest = "npm run cy:run --spec test-electron.cy.js";

// Запуск тестов последовательно
const runTests = () => {
  cy.exec(chromeTest, { failOnNonZeroExit: false })
    .exec(electronTest, { failOnNonZeroExit: false });
};

// Вызов функции для запуска тестов
runTests();