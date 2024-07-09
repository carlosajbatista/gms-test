const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl:'http://127.0.0.1:8080/', // local hom
    baseUrl:'https://golden-movie-studio.vercel.app/', // prd
    video: true
  },
});
