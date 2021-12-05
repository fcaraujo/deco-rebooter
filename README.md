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
```
PLAYWRIGHT_BROWSERS_PATH="/home/pi/browsers"
TP_PWD="YourPassword"
TP_URL="http://192.168.68.1/"
TC_PWD="YourUsername"
TC_URL="http://192.168.1.1/"
TC_USR="YourPassword"
```

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

  ✓  [chrome] › tests/reboot-all.spec.ts:9:1 › login then reboot all (11s)
  2021-12-04T03:21:23.857Z Loaded.
  2021-12-04T03:21:25.243Z Logged in.
  2021-12-04T03:21:29.711Z Reboot requested.
  2021-12-04T03:21:32.610Z Confirmed.

  1 passed (12s)
```