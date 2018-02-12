module.exports = {
  'Shows The extracted url ".uk" link': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('input[id="chooseFile"]')
      .setValue('input[type="file"]', require('path').resolve('http://payload536.cargocollective.com/1/3/108157/13033615/Screen-Shot-2017-12-13-at-14.48.52_920.png'))
      .click("#sendImage")
      .assert.elementPresent('#extractedLink', 'http://nhm.ac.uk')
      .end();
  },

  'Shows The extracted url ".com" link': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('input[id="chooseFile"]')
      .setValue('input[type="file"]', require('path').resolve('http://www.coolture.pt/wp-content/uploads/2017/10/nos-alive-18-3.jpg'))
      .click("#sendImage")
      .assert.elementPresent('#extractedLink', 'http://nosalive.com')
      .end();
  },

};
