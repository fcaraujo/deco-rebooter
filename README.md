# deco-rebooter

NPM Package to reboot TPLink Deco via CLI using automation.

## Requirements

Current model/system and versions utilized.

 - Raspberry Pi
 - NodeJS v12+
 - Chromium
 - Playwright

## Basic Setup

npx playwright install

~ /.bashrc
export PLAYWRIGHT_BROWSERS_PATH=$HOME/browsers

mkdir -p $PLAYWRIGHT_BROWSERS_PATH/chromium-939194/chrome-linux
cp $(which chromium-browser) $PLAYWRIGHT_BROWSERS_PATH/chromium-939194/chrome-linux/chrome

PWDEBUG=console npm test
PWDEBUG=1 npm test

/etc/environment
TP_PWD="Tple4f9e2f1"
TP_URL="http://192.168.68.1/"

## First run

npm i
npm test

Expected result:

```
pi@rpi:~/dev/deco-rebooter $ npm test

> tpl@1.0.0 test /home/pi/dev/deco-rebooter
> playwright test

Using config at /home/pi/dev/deco-rebooter/playwright.config.ts

Running 1 test using 1 worker

  ✓  [chrome] › tests/reboot-all.spec.ts:9:1 › login then reboot all (2m)
  2021-12-04T01:54:26.349Z Logged in.
  2021-12-04T01:54:30.003Z Reboot requested.
  2021-12-04T01:54:30.809Z Work in progress...
  2021-12-04T01:56:48.423Z Finished.

  Slow test file: [chrome] › tests/reboot-all.spec.ts (2m)
  Consider splitting slow test files to speed up parallel execution

  1 passed (2m)
```