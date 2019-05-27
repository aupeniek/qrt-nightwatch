// Sample test

module.exports = {
    'Sample test' : function (browser) {
        browser
            .url('http://qrt-assignment.northeurope.cloudapp.azure.com/#/3d')
            .waitForElementVisible('.main-header__title')
            // ...
            .end();
    }
};