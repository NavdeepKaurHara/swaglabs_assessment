const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
        browser: 'chrome',
        pageLoadTimeout: 3000,
        watchForFileChanges: false,
        chromeWebSecurity: false,
        blockHosts: ["https://events.backtrace.io"],  // block backtrace.io
        video: true,
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        retries: {
            runMode: 2,      // Retries when running 'cypress run'
            openMode: 1,     // Retries when running 'cypress open's
        },

        specPattern: 'e2eTests/**/*.js',
        // Disable the support file
        supportFile: false,
        //Using the mochawesome reporter for the test results report
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportDir: 'reports',
            overwrite: true,
            html: true,
            json: true,
            charts: true,
        },
    },
});
