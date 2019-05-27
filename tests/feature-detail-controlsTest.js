// A test to verify feature details gialog and make sure it's controls work correctly
//TODO: select/deselect all dimensions, select/deselect limit scale, modify limit scale with axis ticks checks, switch to Graph view. Repeat this test for all controls: X, Y, N.D

module.exports = {
    'feature-detail controls test' : function (browser) {
        browser
            .url('http://qrt-assignment.northeurope.cloudapp.azure.com/#/3d')
            .waitForElementVisible('#qrt_client>#quality-report-tool')
            .assert.containsText('li.tabs__tab--active', '3D View')          //active tab has text '3D View'
        .waitForElementNotPresent('.loading-screen.flex-center.fade-leave-active.fade-leave-to')
            .waitForElementVisible('li[featurename=\'PUNZON 15\']>button')
            .click('li[featurename=\'PUNZON 15\']')
            .assert.containsText('.feature__header.feature__header--danger>div.feature__header-title', 'PUNZON 15')             //Check selected point title
            .assert.attributeEquals("div.feature__body>table>tr:nth-of-type(1)>th>label>input", "type", "checkbox")        //Find main checkbox
            .assert.attributeContains("div.feature__body>table>tr:nth-of-type(1)>th>label>div.icon>img", "src", "static/icons/UI_CheckBoxActive_24.svg") // main checkbox is selected
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(4)', 'Diameter')          // check legend titles
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(5)', 'N.D')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(6)', 'X')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(7)', 'Y')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(8)', 'Z')
            .assert.containsText("div.feature__body>table>tr:nth-of-type(2)", 'Diameter')
            .click("div.feature__body>table>tr:nth-of-type(2)")             //deselect checkbox 'Diameter'
            .assert.attributeContains("div.feature__body>table>tr:nth-of-type(1)>th>label>div.icon>img", "src", "static/icons/UI_CheckBox_24.svg")  // main checkbox is not selected
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(4)', 'N.D')          // check legend titles
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(5)', 'X')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(6)', 'Y')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(7)', 'Z')
            .click("div.feature__body>table>tr:nth-of-type(2)")             //select checkbox 'Diameter'
            .assert.attributeContains("div.feature__body>table>tr:nth-of-type(1)>th>label>div.icon>img", "src", "static/icons/UI_CheckBoxActive_24.svg") // main checkbox is selected
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(4)', 'Diameter')          // check legend titles
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(5)', 'N.D')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(6)', 'X')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(7)', 'Y')
            .assert.containsText('div.tolerance-chart__canvas>svg>g>g:nth-of-type(8)', 'Z')
            .end();
    }
};