const { defineConfig } = require('cypress');

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,
  projectId: "nw8r8a",
  defaultCommandTimeout: 20000,
  // retries:2,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },

  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});