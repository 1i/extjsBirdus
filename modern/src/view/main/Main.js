/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('birdus.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [
                {
                    xtype: 'mainlist'
                }
            ]
        }, {
            title: 'Info',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '<br>' +
                'Daily 🐦 sightings from <a href="http://www.irishbirding.com">www.irishbirding.com</a>.' +
                '<br><br>' +
                'Made by <a href="https://github.com/1i">Patrick O\'Sullivan</a>'

            }
        }
    ]
});
