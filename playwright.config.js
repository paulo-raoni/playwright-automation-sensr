const { defineConfig, devices } = require('@playwright/test');
const authFile = 'auth.json';

module.exports = defineConfig({
  testDir: './tests/e2e',
  globalSetup: require.resolve('./tests/e2e/global.setup.js'),

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: authFile,
        ignoreHTTPSErrors: true,
      },
    },
  ],
});
