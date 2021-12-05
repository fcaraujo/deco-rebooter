# deco-rebooter

NPM Package to reboot TPLink Deco via CLI using automation.

## Requirements
Your machine should be able to ping/load the router IP/UI.
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

Running 2 tests using 2 workers

  2021-12-05T03:38:03.161Z [TechnCol] Going to http://192.168.1.1.
  2021-12-05T03:38:03.243Z [Deco X20] Going to http://192.168.68.1/webpages/index.html#reboot.
  2021-12-05T03:38:04.337Z [Deco X20] Loaded.
  2021-12-05T03:38:05.790Z [TechnCol] Loaded.
  2021-12-05T03:38:05.890Z [Deco X20] Logged in.
  2021-12-05T03:38:06.187Z [TechnCol] Logged in.
  2021-12-05T03:38:10.407Z [Deco X20] Reboot requested.
  2021-12-05T03:38:12.545Z [TechnCol] Reboot requested.
  2021-12-05T03:38:12.588Z [TechnCol] Confirmed.
  ✓  [chrome] › tests/technicolor.spec.ts:8:1 › reboot (11s)
  2021-12-05T03:38:13.297Z [Deco X20] Confirmed.
  ✓  [chrome] › tests/tplink-deco.spec.ts:8:1 › reboot all (11s)

  2 passed (13s)
```