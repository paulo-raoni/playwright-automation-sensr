const { defineConfig, devices } = require('@playwright/test');
const { AUTH_FILE_PATH } = require('./tests/e2e/helpers/constants');

module.exports = defineConfig({
  testDir: './tests/e2e',
  globalSetup: require.resolve('./tests/e2e/setup/global.setup.js'),

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: AUTH_FILE_PATH,
        ignoreHTTPSErrors: true,
      },
    },
  ],
});
