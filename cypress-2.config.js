const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2ct4x2",
  e2e: {
    baseUrl: 'https://sqlverifier-staging-08050d656f7a.herokuapp.com',
    setupNodeEvents(on, config) {
          // implement node event listeners here
    }
  }
});
