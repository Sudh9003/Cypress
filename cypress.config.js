const { defineConfig } = require("cypress");

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
  //It will consider to execute every file eith .JS extension/ We can have tcs 
  //Inside integration folder
  specPattern:'cypress/e2e/*.js'
  }, 
});
