const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    "chromeWebSecurity" : false,
    "firefoxWebSecurity" : false
   },
});
