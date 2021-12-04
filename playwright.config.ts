import { PlaywrightTestConfig, devices } from '@playwright/test';
import { TestOptions } from './test-options';

const baseURL = process.env.TP_URL ?? 'not-set';
const forbidOnly = !!process.env.CI;
const password = process.env.TP_PWD;
const retries = process.env.CI ? 2 : 0;

const config: PlaywrightTestConfig<TestOptions> = {
  timeout: 200000,
  globalTimeout: 600000,
  forbidOnly,
  retries,
  use: {
    baseURL,
    password,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
export default config;