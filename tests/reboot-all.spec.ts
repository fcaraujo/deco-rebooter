import { expect } from '@playwright/test';
import {test } from '../test-options';

const log = (msg: string) => 
{
  console.log(`  ${new Date().toISOString()} ${msg}`);
};

test('login then reboot all', async ({ page, password, rebootTimeout }) => {
  const timeout = rebootTimeout;

  await page.goto('/webpages/index.html#reboot');
  
  await page.fill('input[type="password"]', password);
  await page.click('a:has-text("LOG IN")');
  log('Logged in.');

  // await page.click('text=Advanced');
  // await page.click('text=System');
  // await page.click('text=Reboot');

  await page.click('text=REBOOT ALL');
  log('Reboot requested.');

  await page.click('div[id="global-confirm"] >> text=Reboot');
  
  const progressLocator = page.locator('div[id="reboot-progress"]');
  await expect(progressLocator).toBeVisible();
  log('Work in progress...');
  
  const percentLocator = page.locator('.progressbar-percentage')
  await expect(percentLocator).toHaveText('100%',{ timeout });
  
  await expect(progressLocator).toBeHidden({timeout});
  log('Finished.')

  // await page.pause();
});
