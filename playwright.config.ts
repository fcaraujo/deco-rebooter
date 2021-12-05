import { PlaywrightTestConfig, devices } from '@playwright/test';
import { TestOptions } from './test-options';

// Technicolor
const tcPwd = process.env.TC_PWD;
const tcUrl = process.env.TC_URL ?? 'not-set';
const tcUsr = process.env.TC_USR ?? 'not-set';

// TP-Link Deco
const tpUrl = process.env.TP_URL ?? 'not-set';
const tpPwd = process.env.TP_PWD;

// General
const forbidOnly = !!process.env.CI;
const retries = process.env.CI ? 2 : 0;
const timeout = 60000;

const config: PlaywrightTestConfig<TestOptions> = {
  timeout: 200000,
  globalTimeout: 600000,
  forbidOnly,
  retries,
  use: {
    deco: {
      pwd: tpPwd,
      timeout,
      url: tpUrl,
    },
    technicolor: {
      pwd: tcPwd,
      timeout,
      url: tcUrl,
      usr: tcUsr,
    },
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