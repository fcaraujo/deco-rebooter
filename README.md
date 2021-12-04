# deco-rebooter

NPM Package to reboot TPLink Deco

## Basic Setup

npx playwright install

~ /.bashrc
export PLAYWRIGHT_BROWSERS_PATH=$HOME/browsers

mkdir -p $PLAYWRIGHT_BROWSERS_PATH/chromium-939194/chrome-linux
cp $(which chromium-browser) $PLAYWRIGHT_BROWSERS_PATH/chromium-939194/chrome-linux/chrome

PWDEBUG=console npm test
PWDEBUG=1 npm test