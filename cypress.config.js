const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  env:{
    url:"https://rahulshettyacademy.com/angularpractice/"
  },
  projectId: "7gszz8",
  retries: {
    runMode: 1,//retry for failed Tcs
    },
  e2e: {

    watchForFileChanges: true,
    "reporter":"mochawesome",
    "reporterOptions":{"charts":true,"overwrite":false,"html":false,"json":true
    //"reportDir":"cypress/reports"
  },
  baseUrl:'https://rahulshettyacademy.com/AutomationPractice',
  //It will consider to execute every file with .JS extension/ We can have tcs 
  //Inside integration folder
   specPattern:'cypress/e2e/BDD/*.feature',
  //specPattern:'cypress/e2e/*.js',
  setupNodeEvents,
  },
});
