const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/scenarios",
    supportFile: "cypress/support/commands.js"
  },
  env:{
    baseURL: "https://opensource-demo.orangehrmlive.com/"
  }
});
