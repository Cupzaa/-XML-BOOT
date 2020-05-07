/* eslint-env node */
/* eslint-disable camelcase */

const browsers = {
  safari10Mac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Sierra',
    browser: 'Safari',
    browser_version: '10.0'
  },
  safariMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Catalina',
    browser: 'Safari',
    browser_version: 'latest'
  },
  chromeMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Catalina',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Catalina',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  edgeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Edge',
    browser_version: '16'
  },
  chromeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  iphone7: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '10',
    device: 'iPhone 7',
    real_mobile: true
  },
  iphone11: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '13',
    device: 'iPhone 11',
    real_mobile: true
  },
  pixel2: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '8.0',
    device: 'Google Pixel 2',
    real_mobile: true
  }
}

const browsersKeys = Object.keys(browsers)

module.exports = {
  browsers,
  browsersKeys
}
