Ext.define('birdus.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'birdus.store.Birdus'
    ],

    store: {
        type: 'birdus'
    },

    columns: [
        {text: 'Date', dataIndex: 'date', flex: 1},
        {text: 'Name', dataIndex: 'commonName', flex: 3},
        {text: 'Location', dataIndex: 'location', flex: 3},
        {text: 'County', dataIndex: 'county', flex: 2},
        {text: 'Count', dataIndex: 'count', flex: 1},
        {text: 'Photo', dataIndex: 'photo', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
