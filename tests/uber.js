describe('Uber tests', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

    test('Open Uber website', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.elementPresent('head')
        .assert.elementPresent('title')
        .end();
    });

    test('Check block login in the header wrapper', function (browser) {
      browser
        .waitForElementVisible('body')
        .useXpath()
        .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .end();
    });

    test('Check login block in two sections', function (browser) {
      browser
        .useCss()
        .waitForElementVisible('body')
        .useXpath()
        .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .end();
    });

    test('Check login chauffeur section', function (browser) {
      browser
        .useCss()
        .waitForElementVisible('body')
        .useXpath()
        .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .useCss()
        .waitForElementVisible('body')
        .assert.urlContains('https://auth.uber.com/login/')
        .useXpath()
        .assert.elementPresent('//*[@id="useridInput"]')
        .assert.elementPresent('//*[@id="app-body"]/div/div[1]/form/div[2]/button')
        .end();
    });

    test('Check login passager section', function (browser) {
      browser
        .useCss()
        .waitForElementVisible('body')
        .useXpath()
        .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[1]/button')
        .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .click('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .assert.elementPresent('//*[@id="mobile"]')
        .assert.elementPresent('//*[@id="next-button"]')
        .assert.elementPresent('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
        .click('//*[@id="app-content"]/div/div/div/div/div/div/div/div[2]/div/a')
        .waitForElementVisible('/html/body')
        .assert.elementPresent('//*[@id="app-content"]/div/div/div/div/div/a[1]')
        .assert.elementPresent('//*[@id="googleLoginButton"]')
        .end();
    });
    
    test('Check Register block in two sections', function (browser) {
      browser
        .useCss()
        .waitForElementVisible('body')
        .useXpath()
        .assert.elementPresent('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .click('//*[@id="main"]/nav/div/ul[3]/li[2]/button')
        .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[1]/a')
        .assert.elementPresent('//*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/div/section/div/div/div/div/div[3]/a')
        .end();
    });

});
