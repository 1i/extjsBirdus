/**
 * This view is an example list of people.
 */
Ext.define('birdus.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'birdus.store.Birdus'
    ],

    title: 'Birds',

    store: {
        type: 'birdus'
    },
    scroll : true,

    columns: [
        {text: 'Date', dataIndex: 'date'},
        {text: 'Name', dataIndex: 'commonName', flex: 1},
        {text: 'Scientific Name', dataIndex: 'scientificName', flex: 1},
        {text: 'Location', dataIndex: 'location', flex: 1},
        {text: 'County', dataIndex: 'county', flex: 1},
        {text: 'Count', dataIndex: 'count'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
