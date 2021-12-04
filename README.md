# deco-rebooter

NPM Package to reboot TPLink Deco via CLI.

## Requirements

Current model/system and versions utilized.

 - Raspberry Pi
 - NodeJS v12+
 - Chromium

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
