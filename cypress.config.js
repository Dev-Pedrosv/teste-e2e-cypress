const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    env: {
      viewportWidthBreakpoint: 768,
    },
    projectId: 'v4pnms'
  },
})
