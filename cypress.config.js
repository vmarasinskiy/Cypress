const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,

  projectId: "khktqq",
  e2e: {
    baseUrl: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});