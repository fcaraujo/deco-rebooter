import { expect } from '@playwright/test';

import { log } from '../log';
import { test } from '../test-options';

const id = 'Deco X20';

test('reboot all', async ({ page, deco }) => {
  const url = `${deco.url}/webpages/index.html#reboot`;
  log(`[${id}] Going to ${url}.`)
  await page.goto(url);
  log(`[${id}] Loaded.`);

  await page.fill('[type="password"]', deco.pwd);
  await page.click('"LOG IN"');
  log(`[${id}] Logged in.`);

  const deviceLocator = page.locator('.icon-device-x20 >> nth=0');
  await expect(deviceLocator).toBeVisible({ timeout: 10000 });

  await page.click('"REBOOT ALL"');
  await page.click('#global-confirm >> "Reboot"');
  log(`[${id}] Reboot requested.`);

  const progressLocator = page.locator('#reboot-progress');
  await expect(progressLocator).toBeVisible();
  log(`[${id}] Confirmed.`);
});
