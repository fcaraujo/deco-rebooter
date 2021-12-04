import { expect } from '@playwright/test';
import { test } from '../test-options';

const log = (msg: string) => {
  console.log(`  ${new Date().toISOString()} ${msg}`);
};

test('login then reboot all', async ({ page, password }) => {
  await page.goto('/webpages/index.html#reboot');
  log('Loaded.');

  await page.fill('[type="password"]', password);
  await page.click('"LOG IN"');
  log('Logged in.');

  const deviceLocator = page.locator('.icon-device-x20 >> nth=0');
  await expect(deviceLocator).toBeVisible({ timeout: 10000 });

  await page.click('"REBOOT ALL"');
  await page.click('#global-confirm >> "Reboot"');
  log('Reboot requested.');

  const progressLocator = page.locator('#reboot-progress');
  await expect(progressLocator).toBeVisible();
  log('Confirmed.');
});
