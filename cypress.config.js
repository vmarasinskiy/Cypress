const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2ct4x2",
  e2e: {
    setupNodeEvents(on, config) {
          // implement node event listeners here
    }
  }
});
