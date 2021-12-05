import { expect } from "@playwright/test";

import { log } from "../log";
import { test } from "../test-options";

const id = 'TechnCol';

test('reboot', async ({ page, deco, technicolor }) => {
    const url = technicolor.url;
    log(`[${id}] Going to ${url}.`)
    await page.goto(url);
    log(`[${id}] Loaded.`);

    await page.fill('[placeholder="Your username"]', technicolor.usr);
    await page.fill('[placeholder="Your password"]', technicolor.pwd);
    await page.press('[placeholder="Your password"]', 'Enter');
    log(`[${id}] Logged in.`);
    
    await page.click('.settings >> nth=0');
    
    await page.click('"Restart"');
    log(`[${id}] Reboot requested.`);
    
    const progressLocator = page.locator('"Restarting, please wait..."');
    await expect(progressLocator).toBeVisible();
    log(`[${id}] Confirmed.`);
});