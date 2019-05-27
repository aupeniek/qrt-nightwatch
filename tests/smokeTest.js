// Basic test to check version, main views and their controls

module.exports = {
    'Smoke test' : function (browser) {
        browser
            .url('http://qrt-assignment.northeurope.cloudapp.azure.com/#/3d')
            .waitForElementVisible('#qrt_client>#quality-report-tool')
            .waitForElementVisible('div.full-height>div.tabbed-layout>div.tabbed-layout__main-header>div.main-header')
            .waitForElementVisible('div.main-header')
            .waitForElementVisible('div.main-header__title', 10*1000)
            .assert.containsText('.main-header__version', '5.1.0')             //Check version
            .waitForElementVisible('.main-header__datetime-date')
            .waitForElementVisible('.button-settings')                                   //settings button
            .waitForElementVisible('.tabbed-layout__subheader-global')
            .waitForElementVisible('.tabbed-layout__subheader-global-item')
            .waitForElementVisible('ul.tabs__tab-list')                                 //view tabs
            .assert.containsText('li.tabs__tab--active', '3D View')          //active tab has text '3D View'
            .waitForElementVisible('li.tabs__tab')
            .waitForElementVisible('.feature-list')
            .waitForElementVisible('.main-sidebar__header')
            .waitForElementVisible('.main-sidebar__content')
            .waitForElementVisible('.multiselect__caret')
            .click('.tabs__tab-list .tabs__tab:nth-of-type(2)')                                 // Switch to Geometry View
            .waitForElementVisible('.list-view-filters__main-filters')
            .waitForElementVisible('.list-view-filters__control')
            .waitForElementVisible('.multiselect__caret')
            .waitForElementVisible('.list-view-filters__control')
            .waitForElementPresent('.btn-primary')
            .waitForElementPresent('.btn-default')
            .click('.tabs__tab-list .tabs__tab:nth-of-type(3)')                                 // Switch to Graph View
            .waitForElementVisible('.multiselect__caret')
            .waitForElementPresent('.btn-primary')
            .waitForElementVisible('div.graph__controls>div.graph__controls__control>div.input-group')
            .waitForElementVisible('div.graph__controls>div.graph__controls__control>div.select-wrapper')
            .waitForElementVisible('div.graph__controls>div.graph__controls__control>div.multiselect')
            .assert.containsText('div.graph__controls>div.graph__controls__control>button', 'Search')
            .end();
    }
};